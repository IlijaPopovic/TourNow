import React from "react";
import "../../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialValues = {
  name: "",
  mail: "",
  password: "",
  about: "",
  image: undefined,
};

const ChangeTour = (props) => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

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
      .test("filesSize", "Fajl je previše velik", (value) => {
        if (value === undefined) {
          return true;
        }
        for (let i = 0; i < value.length; i++) {
          if (value[i]["size"] > FILE_SIZE) {
            return false;
          }
        }
        return true;
      })
      .test("fileType", "Nepodržan tip fajla", (value) => {
        if (value === undefined) {
          return true;
        }
        for (let i = 0; i < value.length; i++) {
          if (!SUPPORTED_FORMATS.includes(value[i]["type"])) {
            return false;
          }
        }
        return true;
      }),
  });

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post(
        "http://localhost/TourMeAround/user/getChangeTourData.php",
        dataSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
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
  const initialValues = { ...data[2][0], image: undefined };
  //console.log(initialValues);

  return (
    <div className="form-main">
      <h1>Change Tour</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post("http://localhost/TourMeAround/user/changeTour.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              // console.log(response.data);
              if (response.data["status"] === "updated") {
                alert("Changed");
              } else {
                alert("Error");
              }
            });
        }}
      >
        {({ setFieldValue, errors }) => (
          // console.log("Formik Errors:", errors),
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
              <Field
                name="date_start"
                type="datetime-local"
                placeholder="Date start"
              />
              <ErrorMessage
                name="date_start"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field
                name="date_end"
                type="datetime-local"
                placeholder="Date end"
              />
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
              <Field name="max_people" type="text" placeholder="Max eople" />
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
                  console.log(selectedFiles[0]["size"]);
                  setFieldValue("image", selectedFiles);
                }}
              />
              <ErrorMessage
                name="image"
                component="div"
                className="field-error"
              />
            </label>

            <button type="submit">Change</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeTour;
