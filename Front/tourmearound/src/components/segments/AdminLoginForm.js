import React from "react";
import "../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  password: "",
};

const LoginForm = (props) => {
  const navigate = useNavigate();
  return (
    <div className="form-main">
      <h1>Log in admin</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //console.log(values);
          axios
            .post(process.env.REACT_APP_API_URL + "adminLogin.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              //console.log(response.data);
              if (response.data.id === "no") {
                alert("pogresan upis");
              } else {
                localStorage.setItem("admin", response.data[0].id);
                //window.location.reload();
                navigate("/");
              }
            });
        }}
      >
        {() => (
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
    </div>
  );
};

export default LoginForm;
