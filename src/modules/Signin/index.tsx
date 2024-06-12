import React, { useState } from "react";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import appleIcon from "../../assets/apple.svg";
import googleIcon from "../../assets/google.svg";
import facebookIcon from "../../assets/Facebook.svg";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setActiveUser, setLoggedIn } from "./features/loginSlice";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 length of password"),
});

const Signin = () => {
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
      const isValidLoginCredentials =
        isUserExists.email === data.email &&
        isUserExists.password === data.password;
      if (isValidLoginCredentials) {
        dispatch(setActiveUser(isUserExists));
        dispatch(setLoggedIn(true));
        reset();
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else if (
        isUserExists.email === data.email &&
        isUserExists.password !== data.password
      ) {
        toast.error("Password doesn't match!");
      }
    } else {
      toast.error("This user doen't exist, Please signup first");
    }
  };

  return (
    <div className="bg-white p-10 shadow rounded-3xl min-w-sm flex flex-col">
      <div className="grid grid-cols-3 justify-between">
        <div className="mb-10 col-span-2">
          <p>
            Welcome to{" "}
            <span className="max-sm:text-primary max-sm:font-bold">Lorem</span>
          </p>
          <h1 className="font-semibold text-5xl">Sign in</h1>
        </div>
        <div className="col-span-1">
          <p className="text-gray-400">No account ?</p>
          <Link className="text-amber-800 cursor-pointer" to={"/signup"}>
            Sign up
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-sm:flex-col-reverse max-sm:flex">
          <div className="flex flex-col gap-4">
            <Input
              label="Enter your username or email address"
              placeholder="Username or email address"
              name="email"
              register={register}
              errors={errors}
            />
            <Input
              label="Enter your Password"
              placeholder="Password"
              name="password"
              type={viewPassword ? "text" : "password"}
              inputType={"password"}
              handleChangePasswordView={() => setViewPassword(!viewPassword)}
              register={register}
              errors={errors}
            />
            <p className="text-right text-sm text-amber-800">Forgot Password</p>
            <Button type="submit">Sign in</Button>
            <p className="text-center text-gray-400 mb-4 max-sm:hidden">OR</p>
          </div>
          <div className="grid grid-cols-5 gap-3 max-sm:mb-4">
            <Button className="!bg-amber-200/20 !text-primary gap-2 col-span-3 pointer-events-none cursor-none">
              <img src={googleIcon} alt="google" />
              Sign in with Google
            </Button>
            <div className="bg-gray-200  rounded-lg p-4 col-span-1">
              <img src={facebookIcon} alt="facebook" width={30} height={30} />
            </div>
            <div className="bg-gray-200 rounded-lg p-4 col-span-1">
              <img src={appleIcon} alt="apple" width={30} height={30}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
