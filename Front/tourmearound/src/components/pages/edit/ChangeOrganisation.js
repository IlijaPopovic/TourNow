import React from "react";
import "../../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const initialValues = {
  name: "",
  mail: "",
  password: "",
  about: "",
  image: undefined,
};

const ChangeOrganisation = (props) => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    mail: yup.string().email().required("Required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    about: yup.string().required("Required"),
    image: yup
      .mixed()
      .test("fileSize", "Fajl je previše velik", (value) => {
        //console.log(value);
        return !value || (value && value.size <= FILE_SIZE);
      })
      .test(
        "fileType",
        "Nepodržan tip fajla",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post(
        "http://localhost/TourMeAround/user/getChangeOrganisationData.php",
        dataSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setData(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const initialValues = { ...data[0], image: undefined };
  //console.log(initialValues);

  return (
    <div className="form-main">
      <h1>Change Organisation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post(
              "http://localhost/TourMeAround/user/ChangeOrganisation.php",
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
              <Field name="mail" type="text" placeholder="Mail" />
              <ErrorMessage
                name="mail"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="password" type="text" placeholder="Password" />
              <ErrorMessage
                name="password"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="about" type="text" placeholder="About" />
              <ErrorMessage
                name="about"
                component="div"
                className="field-error"
              />
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
        )}
      </Formik>
    </div>
  );
};

export default ChangeOrganisation;
