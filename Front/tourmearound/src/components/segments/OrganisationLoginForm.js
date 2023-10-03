import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="form-main">
      <h1>Log in organisation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios
            .post(
              process.env.REACT_APP_API_URL + "organisationLogin.php",
              values,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              console.log(response);
              console.log(values);
              if (response.data.id === "no") {
                alert("Wrong data");
              } else {
                localStorage.setItem("organisation", response.data[0].id);
                navigate("/");
              }
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
            <NavLink to="/OrganisationForgotPassword">
              Forgotten password?
            </NavLink>
          </Form>
        )}
      </Formik>
      <button type="button" onClick={props.toggleForm}>
        {props.isSignUp ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
};

export default LoginForm;
