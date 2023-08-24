import React from "react";
import "./Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .required("Name is required"),
  date_start: yup.date().required("Surname is required"),
  date_end: yup.date().required("Required"),
  description: yup.string().required("Required"),
  max_people: yup.string().required("Required"),
  type: yup.string().required("Password is required"),
  price: yup.string().required("Required"),
  enabled: yup.string().required("Required"),
  organisation_id: yup.string().notOneOf(["default"], "Select an option"),
  destination_id: yup.string().notOneOf(["default"], "Select an option"),
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
  max_people: "",
  type: "",
  price: "",
  enabled: "",
  organisation_id: "",
  destination_id: "",
  image: undefined,
};

const ChangeTour = (props) => {
  return (
    <div className="form-main">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost/TourMeAround/user/updateTour.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response);
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
                <Field
                  name="max_people"
                  type="email"
                  placeholder="Max people"
                />
                <ErrorMessage
                  name="max_people"
                  component="div"
                  className="field-error"
                />
              </label>

              <label>
                <Field as="select" id="type" name="type">
                  <option value="default">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="field-error"
                />
              </label>

              <label>
                <Field name="price" type="text" placeholder="Price" />
                <ErrorMessage
                  name="mobile_number"
                  component="div"
                  className="field-error"
                />
              </label>

              <label>
                <Field
                  name="identity_number"
                  type="text"
                  placeholder="Identity Number"
                />
                <ErrorMessage
                  name="identity_number"
                  component="div"
                  className="field-error"
                />
              </label>

              <label className="file-input-label">
                {"Upload profile picture"}
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

              <button type="submit">Sign Up</button>
            </Form>
          )
        )}
      </Formik>
      <button type="button" onClick={props.toggleForm}>
        {props.isSignUp ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
};

export default ChangeTour;
