import React from "react";
import "../../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  date_start: yup.date().required("$equired"),
  date_end: yup.date().required("Required"),
  description: yup.string().required("Required"),
  price: yup.string().required("Required"),
  max_people: yup.string().required("Required"),
  destination_id: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test(
      "fileSize",
      "Fajl je previše velik",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileType",
      "Nepodržan tip fajla",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

const initialValues = {
  name: "",
  date_start: "",
  date_end: "",
  description: "",
  price: "",
  max_people: "",
  destination_id: "",
  image: undefined,
};

const CreateAttraction = (props) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL + "getCreateAttractionData.php")
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

  const destinations = data.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));
  return (
    <div className="form-main">
      <h1>Create Attraction</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post(
              process.env.REACT_APP_API_URL + "CreateAttraction.php",
              values,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              console.log(response);
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
          console.log("Formik Errors:", errors),
          (
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
                <Field
                  name="description"
                  type="text"
                  placeholder="Description"
                />
                <ErrorMessage
                  name="description"
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
                <Field name="max_people" type="text" placeholder="Max people" />
                <ErrorMessage
                  name="max_people"
                  component="div"
                  className="field-error"
                />
              </label>

              <label>
                <Field as="select" id="destination_id" name="destination_id">
                  <option value="default">Select destination</option>
                  {destinations}
                </Field>
              </label>

              <label className="file-input-label">
                {"Upload image"}
                <input
                  className="file-input"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                    console.log(event.currentTarget.files[0]);
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
          )
        )}
      </Formik>
    </div>
  );
};

export default CreateAttraction;
