import React from "react";
import "../style/Form.css";
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
  mail: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
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
  mail: "",
  password: "",
  about: "",
  image: undefined,
};

const SignUpForm = (props) => {
  return (
    <div className="form-main">
      <h1>Sign up orgnaisation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios
            .post(
              "http://localhost/TourMeAround/user/createOrganisation.php",
              values,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              console.log(response.data);
              if (response.data.status === "inserted") {
                alert("Verifikacioni mail Vam je poslat");
              } else {
                alert("Error - duplicate mail");
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
                <Field name="mail" type="email" placeholder="Email" />
                <ErrorMessage
                  name="mail"
                  component="div"
                  className="field-error"
                />
              </label>

              <label>
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="field-error"
                />
              </label>

              <label>
                <Field name="about" type="text" placeholder="Mobile Number" />
                <ErrorMessage
                  name="about"
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

export default SignUpForm;
