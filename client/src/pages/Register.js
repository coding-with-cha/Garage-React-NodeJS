import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { errors: userError } = useSelector((state) => state.user);

  const userInfo = (data) => {
    dispatch(registerUser({ data, navigate }));
  };
  return (
    <div className="registerPage">
      <div className="contenuRegisterPage">
        <div className="registerTop">
          <h1>Bienvenue !</h1>
        </div>
        <div className="registerForm">
          <form onSubmit={handleSubmit(userInfo)} className="formRegister">
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: true })}
              className="furstInput"
            />
            <input
              type="text"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "invalid email",
                },
              })}
            />
            <br />
            <p className="errorsRegisterEmail">{errors.email?.message}</p>
            <input
              className="inputPass"
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password should be of 6 characters length",
                },
              })}
            ></input>
            <br />
            <p className="errorsRegisterPassword">{errors.password?.message}</p>
            <p className="errorsRegister">{userError && userError}</p>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
