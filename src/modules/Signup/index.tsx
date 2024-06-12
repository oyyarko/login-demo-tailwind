import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUsers } from "./features/signUpSlice";
import { toast } from "react-toastify";
import { setActiveUser, setLoggedIn } from "../Signin/features/loginSlice";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 length of password"),
  contact: Yup.string()
    .required("Contact Number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10, "Minimum 10 Length of contact number")
    .max(10, "Minimum 10 Length of contact number"),
  username: Yup.string().required("User name is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.signup);
  const [viewPassword, setViewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const isUserExists = users.find(
      (user: { email: any }) => user.email === data.email
    );
    if (isUserExists) {
      toast.error("The email is already signed up, please try another one");
    } else {
      dispatch(setUsers(data));
      dispatch(setActiveUser(data));
      dispatch(setLoggedIn(true));
      reset();
      toast.success("Signed up successfully!");
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-white p-10 shadow rounded-3xl min-w-sm flex flex-col">
      <div className="grid grid-cols-4 justify-between">
        <div className="mb-10 col-span-3">
          <p>
            Welcome to{" "}
            <span className="max-sm:text-primary max-sm:font-bold">Lorem</span>
          </p>
          <h1 className="font-semibold text-5xl">Sign up</h1>
        </div>
        <div className="col-span-1">
          <p className="text-gray-400">Have an account ?</p>
          <Link className="text-amber-800 cursor-pointer" to={"/"}>
            Sign in
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Input
            label="Enter your username or email address"
            placeholder="Username or email address"
            name="email"
            register={register}
            errors={errors}
          />
          <div className="flex gap-4">
            <Input
              label="User name"
              placeholder="User name"
              name="username"
              register={register}
              errors={errors}
            />
            <Input
              label="Contact Number"
              placeholder="Contact Number"
              name="contact"
              register={register}
              errors={errors}
            />
          </div>
          <Input
            label="Enter your Password"
            placeholder="Password"
            name="password"
            type={viewPassword ? "text" : "password"}
            handleChangePasswordView={() => setViewPassword(!viewPassword)}
            inputType={"password"}
            register={register}
            errors={errors}
          />
          <Button type="submit" className="my-7">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
