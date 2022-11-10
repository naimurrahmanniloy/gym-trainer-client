import React from 'react';
import img from '../../assets/login.jpg'

const Login = () => {


    return (
        <div className="hero h-1/2 w-full bg-base-200 my-6">
            <div className="hero-content gap-14 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl p-10 bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;