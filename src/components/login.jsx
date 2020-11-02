import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  .form {
    border: 2px solid #000;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    padding: 20px;
    border-radius: 5px;
  }

  .input {
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .btn__form {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const Login = props => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("El email no es valido").required("Email requerido"),
        password: Yup.string()
          .min(5, "La password debe tener al menos 5 caracteres")
          .required("Contraseña requerida"),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        axios
          .post("http://localhost:3001/user/login", values)
          .then(res => {
            console.log(res);
            localStorage.setItem("Authorized", res.data.bearerToken);
            props.history.push("/home");
            actions.resetForm();
          })
          .catch(err => {
            console.log(err);
            alert("Email y/o contraseña invalidos");
          });
      }}
    >
      <FormContainer>
        <Form className="form">
          <h1>Ingresar Usuario</h1>
          <Field type="text" placeholder="Email" name="email" className="input" />
          <ErrorMessage name="email" />
          <Field type="password" placeholder="Contraseña" name="password" className="input" />
          <ErrorMessage name="password" />
          <button type="submit" className="btn__form">
            Ingresar
          </button>
        </Form>
      </FormContainer>
    </Formik>
  );
};

export default Login;
