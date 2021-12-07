import React from "react";
import { Formik, Form } from "formik";
import { object, string, ref } from "yup";

import Input from "../Input"

const RegisterValidation = object().shape({
  name: string().required("Required"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
});

function Register() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidation}
    >
      {() => {
        return (
          <Form className="bg-white w-4/12 shadow-md rounded px-8 pt-6 pb-8">
            <Input name="name" label="Nombre" />
            <Input name="email" label="Correo" />
            <Input name="password" label="Contraseña" type="password" />
            <Input
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
            />
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Register;
