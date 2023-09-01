import React from "react";
import "../style/Form.css";
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
      <h1>Log in user</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //console.log(values);
          axios
            .post(process.env.REACT_APP_API_URL + "userLogin.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response.data);
              if (response.data.user === "no") {
                alert("pogresan upis");
              } else {
                localStorage.setItem("user", response.data[0].id);

                navigate("/");
              }
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
            <NavLink to="/UserForgotPassword">Forgotten password?</NavLink>
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
