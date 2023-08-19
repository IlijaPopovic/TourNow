import React from "react";
import "./Form.css";
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
    <div className="form-main">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post("http://localhost/TourMeAround/user/userLogin.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response.data);
            });
        }}
      >
        {() => (
          <Form className="form">
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

            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
      <button
        type="button"
        onClick={props.toggleForm}
        className="switch-button"
      >
        {props.isSignUp ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
};

export default LoginForm;
