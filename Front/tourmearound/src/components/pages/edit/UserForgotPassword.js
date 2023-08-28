import React from "react";
import "../../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const UserForgotPassword = (props) => {
  const validationSchema = yup.object({
    mail: yup.string().email().required("Required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    mail: "",
  };

  return (
    <div className="form-main">
      <h1>Forgoten password</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post(
              process.env.REACT_APP_API_URL + "userForgotPassword.php",
              values,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              //console.log(response.data);
              if (response.data["status"] === "updated") {
                alert("Check your mail");
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
              <Field name="mail" type="text" placeholder="Mail" />
              <ErrorMessage
                name="mail"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field
                name="password"
                type="password"
                placeholder="New password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="field-error"
              />
            </label>
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForgotPassword;
