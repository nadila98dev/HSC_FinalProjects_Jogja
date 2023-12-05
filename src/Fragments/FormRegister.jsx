import InputForm from "../Components/Atoms/Input/Index";
import Button from "../Components/Atoms/ButtonAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../API/apiCall";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Label from "../Components/Atoms/Input/Label";

const FormRegister = () => {
  const navigate = useNavigate();
  const RegisterFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const res = await axiosInstance.signup(payload);

    if (res?.success === true) {
      toast.success(res.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } else {
      const msg = res.message || "Internal Server Error";
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>Full Name</Label>
        <Field
          className="w-full p-2 border border-base rounded-md"
          type="text"
          placeholder="insert your full name"
          name="name"
        />
        <ErrorMessage
          name="name"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />
        <Label>Email</Label>
        <Field
          label="Email"
          className="w-full p-2 border border-base rounded-md "
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <ErrorMessage
          name="email"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />
        <Label>Password</Label>
        <Field
          label="Password"
          className="w-full p-2 border border-base rounded-md mb-1"
          type="password"
          placeholder="*******"
          name="password"
        />
        <ErrorMessage
          name="password"
          render={(msg) => <div className="text-danger">{msg}</div>}
        />
        {/* <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*******"
        name="confirmpassword"
      /> */}

        <Button
          variant="bg-button w-full
      "
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default FormRegister;
