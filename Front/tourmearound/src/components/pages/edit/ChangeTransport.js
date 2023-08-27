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

const ChangeTransport = (props) => {
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    type: yup
      .string()
      .notOneOf(["default"], "Select an option")
      .required("Required"),
    start: yup.date().required("Required"),
    end: yup.date().required("Required"),
    tour_id: yup
      .string()
      .notOneOf(["default"], "Select an option")
      .required("Required"),
  });

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post(
        "http://localhost/TourMeAround/user/getChangeTransportData.php",
        dataSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  const enumValues = data[0]
    .match(/'([^']+)'/g)
    .map((value) => value.replace(/'/g, ""));

  const types = enumValues.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const tours = data[1].map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  const initialValues = { ...data[2][0], image: undefined };
  //console.log(initialValues);

  return (
    <div className="form-main">
      <h1>Change transport</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post(
              "http://localhost/TourMeAround/user/ChangeTransport.php",
              values,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              // console.log(response.data);
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
              <Field
                name="start"
                type="datetime-local"
                placeholder="Start date"
              />
              <ErrorMessage
                name="start"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="end" type="datetime-local" placeholder="End date" />
              <ErrorMessage
                name="end"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field as="select" id="type" name="type">
                <option value="default">Select type</option>
                {types}
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field as="select" id="tour_id" name="tour_id">
                <option value="default">Select tour</option>
                {tours}
              </Field>
              <ErrorMessage
                name="tour_id"
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

export default ChangeTransport;
