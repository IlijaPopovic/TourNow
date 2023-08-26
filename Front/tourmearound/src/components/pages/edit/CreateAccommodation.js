import React from "react";
import "./Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  stars: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
  about: yup.string().required("Required"),
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
  stars: "",
  about: "",
  image: undefined,
};

const CreateAccomodation = (props) => {
  return (
    <div className="form-main">
      <h1>Create accommodation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post(
              "http://localhost/TourMeAround/user/createAccommodation.php",
              values,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              console.log(response.data);
              response.data["status"] === "inserted"
                ? alert("Created")
                : alert("Error");
              actions.resetForm();
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
              <Field name="about" type="text" placeholder="about" />
              <ErrorMessage
                name="about"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field as="select" id="stars" name="stars">
                <option value="default">Select stars</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
              <ErrorMessage
                name="stars"
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
        )}
      </Formik>
      <button type="button" onClick={props.toggleForm}>
        {props.isSignUp ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
};

export default CreateAccomodation;
