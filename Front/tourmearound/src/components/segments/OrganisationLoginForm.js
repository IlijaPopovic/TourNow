import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const validationSchema = yup.object({
  mail: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  mail: "",
  password: "",
};

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        axios
          .post(
            "http://localhost/TourMeAround/user/organisationLogin.php",
            values,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            console.log(response.data);
          });
      }}
    >
      {() => (
        <Form className="form">
          <label>
            <Field name="mail" type="email" placeholder="Email" />
            <ErrorMessage name="mail" component="div" />
          </label>

          <label>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </label>

          <button type="submit">Log In</button>

          <button type="button" onClick={props.toggleForm}>
            {props.isSignUp ? "Switch to Signup" : "Switch to Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
