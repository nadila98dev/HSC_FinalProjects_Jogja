import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/apiCall";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Label from "../Components/Atoms/Input/Label";

const FormLogin = () => {
  const navigate = useNavigate();

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    const res = await axiosInstance.login(payload);

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
      navigate("/");
      Cookies.set("X-TOKEN", res.token, { expires: 2 });
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
    <>
      <div className="flex flex-col gap-2">
        <Formik
          initialValues={initialValues}
          validationSchema={LoginFormSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Field
                className="w-full p-2 border border-base rounded-md -mt-2"
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
                className="w-full p-2 border border-base rounded-md -mt-2"
                type="password"
                placeholder="*******"
                name="password"
              />
              <ErrorMessage
                name="password"
                render={(msg) => <div className="text-danger">{msg}</div>}
              />

              <button
                type="submit"
                className="w-[280px] px-3 py-2 bg-button rounded-lg hover:brightness-110 cursor-pointer text-white font-Poppins"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormLogin;
