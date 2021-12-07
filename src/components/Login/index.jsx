import { Formik } from 'formik';
import styled from 'styled-components';

import Field from '../Field';
import Button from '../Button';

const Form = styled.form`

`
const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSumit={handleSubmit}>
      <Form>
        <Field name="email" type="email" label="Correo electronico" placeholder="Email" />
        <Field name="password" type="password" label="Constraseña" placeholder="Contraseña" />
        <div className="">
          <Button type="submit" kindOf="primary">Iniciar Sesión</Button>
          <Button type="button" kindOf="success">Registrarse</Button>
        </div>
      </Form>
    </Formik>

  );
};

export default Login;
