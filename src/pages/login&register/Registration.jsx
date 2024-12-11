import React, {useContext} from 'react';

import Register from "../../assets/Lottie/registerLottie.json"
import Lottie from "lottie-react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import AuthContext from "../../auth/AuthContext.jsx";
import GoogleLogin from "./GoogleLogin.jsx";

const Registration = () => {
    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    const {createUser} = useContext(AuthContext)


    return (
        <div className="hero bg-base-200 my-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center flex-1 lg:text-left">
                    <Lottie animationData={Register}/>
                </div>
                <div className="card flex-1 bg-base-100 w-full shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">Register</h1>

                    <form onSubmit={handleSubmit(data => {
                        console.log(data)
                        createUser(data.email, data.password)
                            .then(res => console.log(res.user))
                            .catch(err => {
                                console.log(err.code)
                            })
                    })} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name"
                                   className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email"
                                   className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "password is require",
                                minLength: {
                                    value: 6,
                                    message: "min 6 character length"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)/,
                                    message: "minimum an uppercase and a number"
                                }
                            })}
                                   type="password"
                                   placeholder="password"
                                   className="input input-bordered"/>
                            <label className="label">
                                <p className="label-text-alt text-red-900">{errors?.password?.message}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <label className="label">
                            <p className="label-text-alt">Already have an account? <Link to={"/login"} className={"underline"}>Login</Link></p>
                        </label>
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;