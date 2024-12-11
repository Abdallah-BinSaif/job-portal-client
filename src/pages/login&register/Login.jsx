import React, {useContext} from 'react';
import Lottie from "lottie-react";
import login from "../../assets/Lottie/loginLottie.json";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import GoogleLogin from "./GoogleLogin.jsx";
import AuthContext from "../../auth/AuthContext.jsx";

const Login = () => {

    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    const { signInUser } = useContext(AuthContext)
    return (
        <div className="hero bg-base-200 my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center flex-1 lg:text-left">
                    <Lottie animationData={login}/>
                </div>
                <div className="card flex-1 bg-base-100 w-full shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">Login</h1>

                    <form onSubmit={handleSubmit(data => {
                        console.log(data)
                        signInUser(data.email, data.password)
                            .then(result =>{
                                console.log(result.user)
                            })
                            .catch(err =>{
                                console.log(err.code)
                            })
                    })} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")}
                                   type="email"
                                   placeholder="email"
                                   className="input input-bordered"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "password is require",
                            })}
                                   type="password"
                                   placeholder="password"
                                   className="input input-bordered"/>
                            <label className="label">
                                <p className="label-text-alt text-red-900">{errors?.password?.message}</p>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">New in job hunting? <Link to={"/register"}
                                className={"underline"}>Register</Link></p>
                        </label>
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;