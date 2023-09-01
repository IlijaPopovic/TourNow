import React from "react";
import "../../style/Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const ChangeAccommodation = (props) => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    stars: yup
      .string()
      .notOneOf(["default"], "Select an option")
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
        process.env.REACT_APP_API_URL + "getChangeAccommodationData.php",
        dataSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setData(response.data);
        //console.log(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }
  //console.log(data[0]);
  const initialValues = { ...data[0], image: undefined };
  //console.log(initialValues);

  return (
    <div className="form-main">
      <h1>Change Accommodation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post(
              process.env.REACT_APP_API_URL + "changeAccommodation.php",
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
                alert("Changed");
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
              {"Upload image"}
              <input
                className="file-input"
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                  //console.log(event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="image"
                component="div"
                className="field-error"
              />
            </label>

            <button type="submit">Change</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeAccommodation;
