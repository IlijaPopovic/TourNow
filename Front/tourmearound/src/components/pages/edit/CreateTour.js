import React from "react";
import "../../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 200 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  date_start: yup.date().required("Required"),
  date_end: yup.date().required("Required"),
  description: yup.string().required("Required"),
  max_people: yup.string().required("Required"),
  type: yup.string().required("Required"),
  price: yup.string().required("Required"),
  organisation_id: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
  destination_id: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("filesSize", "Fajl je previše velik", (value) => {
      for (let i = 0; i < value.length; i++) {
        if (value[i]["size"] > FILE_SIZE) {
          return false;
        }
      }
      return true;
    })
    .test("fileType", "Nepodržan tip fajla", (value) => {
      for (let i = 0; i < value.length; i++) {
        if (!SUPPORTED_FORMATS.includes(value[i]["type"])) {
          return false;
        }
      }
      return true;
    }),
});

const initialValues = {
  name: "",
  date_start: "",
  date_end: "",
  description: "",
  max_people: "",
  type: "",
  price: "",
  image: undefined,
};

const CreateTour = (props) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL + "getCreateTourData.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  const organisations = data[0].map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  const destinations = data[1].map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  return (
    <div className="form-main">
      <h1>Create Tour</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post(process.env.REACT_APP_API_URL + "createTour.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              if (response.data["status"] === "inserted") {
                alert("Created");
                actions.resetForm();
              } else {
                alert("Error");
              }
            });
        }}
      >
        {({ setFieldValue, errors }) => (
          <Form className="form">
            <label>
              <Field name="name" type="text" placeholder="Name" />
              <ErrorMessage
                name="name"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="date_start" type="date" placeholder="Date start" />
              <ErrorMessage
                name="date_start"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="date_end" type="date" placeholder="Date end" />
              <ErrorMessage
                name="date_end"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="description" type="text" placeholder="Description" />
              <ErrorMessage
                name="description"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="max_people" type="text" placeholder="Max people" />
              <ErrorMessage
                name="max_people"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="type" type="text" placeholder="Type" />
              <ErrorMessage
                name="type"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="price" type="text" placeholder="Price" />
              <ErrorMessage
                name="price"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field as="select" id="organisation_id" name="organisation_id">
                <option value="default">Select organisation</option>
                {organisations}
              </Field>
              <ErrorMessage
                name="organisation_id"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field as="select" id="destination_id" name="destination_id">
                <option value="default">Select destination</option>
                {destinations}
              </Field>
              <ErrorMessage
                name="destination_id"
                component="div"
                className="field-error"
              />
            </label>

            <label className="file-input-label">
              {"Upload image"}
              <input
                className="file-input"
                id="image"
                name="image"
                type="file"
                multiple
                onChange={(event) => {
                  const selectedFiles = event.currentTarget.files;
                  //console.log(selectedFiles[0]["size"]);
                  setFieldValue("image", selectedFiles);
                }}
              />
              <ErrorMessage
                name="image"
                component="div"
                className="field-error"
              />
            </label>

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateTour;
