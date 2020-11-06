import React, { useContext, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";
const jwt = require("jsonwebtoken");

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #292e49, #536976);

  .form {
    color: #fff;

    border: 2px solid #000;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    border-color: #fff;
    height: fit-content;
    align-self: center;
  }

  .input {
    padding: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    outline: none;
    border-radius: 3px;
    border: none;
    height: 30px;
  }

  .btn__form {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #fff;
    outline: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .form__title {
    margin-bottom: 15px;
    font-weight: 300;
  }
`;

const Login = props => {
  const onSubmit = (values, actions) => {
    axios
      .post("http://localhost:3001/user/login", values)
      .then(res => {
        const token = res.data.bearerToken;
        localStorage.setItem("Authorization", token);
        actions.resetForm();
        props.history.push("/home");
      })
      .catch(err => {
        console.log(err);
        alert("Email y/o contraseña invalidos");
      });
  };

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
        onSubmit(values, actions);
      }}
    >
      <FormContainer>
        <Form className="form">
          <h1 className="form__title">Ingresar Usuario</h1>
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
