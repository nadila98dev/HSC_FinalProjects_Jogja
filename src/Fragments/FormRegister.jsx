import InputForm from "../Components/Atoms/Input/Index";
import Button from "../Components/Atoms/ButtonAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../API/apiCall";

const FormRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    const res = await axiosInstance.signup(payload);

    if (res?.error === false) {
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
    <div>
      <InputForm
        label="Full Name"
        type="text"
        placeholder="insert your full name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
        value={form.password}
        onChange={handleChange}
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
        action={handleSubmit}
      >
        Register
      </Button>
    </div>
  );
};

export default FormRegister;
