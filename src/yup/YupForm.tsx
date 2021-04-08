import { useState } from "react";
import { Formik, useFormik } from "formik";
import { schema as yupSchema } from "./formValidator";
import { Form } from "bootstrap";

interface User {
  name: string;
  username: string;
  email: string;
  dob: string;
}

const YupForm: React.FC = () => {
  const defaultUser: User = { name: "", username: "", email: "", dob: "" };

  const formik = useFormik({
    initialValues: { ...defaultUser },
    onSubmit: (values) => {
      console.log({ values });
    },
    validationSchema: yupSchema,
  });

  return (
    <div>
      <h1>Register</h1>
      <form className="col s12">
        <div className="col s6">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="col s6">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="col s6">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="col s6">
          <label htmlFor="dob">DOB</label>
          <input
            id="dob"
            name="dob"
            className="datepicker"
            onChange={formik.handleChange}
            value={formik.values.dob}
            onBlur={formik.handleBlur}
          />
          {formik.errors.dob && formik.touched.dob ? (
            <div className="error">{formik.errors.dob}</div>
          ) : null}
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          onSubmit={(e) => {
            formik.handleSubmit();
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export { YupForm };
