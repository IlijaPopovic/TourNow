import React from "react";
import "./Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const FILE_SIZE = 2000 * 1024 * 1024; // ograničenje na 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = yup.object({
  beds_number: yup.string().required("required"),
  name: yup.string().required("required"),
  kid_number: yup.string().required("Required"),
  service: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
  tour_id: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
  accommodation_id: yup
    .string()
    .notOneOf(["default"], "Select an option")
    .required("Required"),
});

const initialValues = {
  beds_number: "",
  name: "",
  kid_number: "",
  service: "",
  tour_id: "",
  accommodation_id: "",
};

const CreateRoom = (props) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post("http://localhost/TourMeAround/user/getCreateRoomData.php")
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

  const accommodations = data[2].map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  const tours = data[1].map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  const enumValues = data[0]
    .match(/'([^']+)'/g)
    .map((value) => value.replace(/'/g, ""));

  const service = enumValues.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div className="form-main">
      <h1>Create Room</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          axios
            .post("http://localhost/TourMeAround/user/createRoom.php", values, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              console.log(response.data);
              if (response.data["status"] === "inserted") {
                alert("Created");
                actions.resetForm();
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
              <Field name="beds_number" type="text" placeholder="beds_number" />
              <ErrorMessage
                name="beds_number"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field name="kid_number" type="text" placeholder="kid_number" />
              <ErrorMessage
                name="kid_number"
                component="div"
                className="field-error"
              />
            </label>

            <label>
              <Field as="select" id="service" name="service">
                <option value="default">Select service</option>
                {service}
              </Field>
              <ErrorMessage
                name="service"
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

            <label>
              <Field as="select" id="accommodation_id" name="accommodation_id">
                <option value="default">Select accommodation</option>
                {accommodations}
              </Field>
              <ErrorMessage
                name="accommodation_id"
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

export default CreateRoom;
