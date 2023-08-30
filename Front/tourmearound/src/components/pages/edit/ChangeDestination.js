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
    coordinates: yup.string().required("Surname is required"),
    country: yup.string().required("Required"),
    description: yup.string().required("Required"),
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
        process.env.REACT_APP_API_URL + "getChangeDestinationData.php",
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
  //console.log(data[0]);
  const initialValues = { ...data[0], image: undefined };
  //console.log(initialValues);

  return (
    <div className="form-main">
      <h1>Change Destination</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post(
              process.env.REACT_APP_API_URL + "changeDestination.php",
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
              <Field name="coordinates" type="text" placeholder="Coordinates" />
              <ErrorMessage
                name="coordinates"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="country" type="text" placeholder="Country" />
              <ErrorMessage
                name="country"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="description" type="text" placeholder="Description" />
              <ErrorMessage
                name="description"
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

            <button type="submit">Change</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeAccommodation;
