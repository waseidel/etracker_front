import React from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import Input from "../Input"

const LoginValidation = object().shape({
  email: string().required("Required").email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
});

function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginValidation}
    >
      {() => {
        return (
          <Form className="bg-white w-4/12 shadow-md rounded px-8 pt-6 pb-8">
            <Input name="email" label="Correo" />
            <Input name="password" label="Contraseña" type="password" />
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
