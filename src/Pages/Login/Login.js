import React, { useContext } from 'react';
import img from '../../assets/login.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .then(err => console.log(err))
    }

    return (
        <div className="hero h-1/2 w-full bg-base-200 my-6">
            <div className="hero-content gap-14 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl p-10 bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                        <p className='text-center text-lg'>Or sign in with</p>
                        <div className="form-control mt-6">
                            <button className=' btn btn-primary'>Google <FcGoogle className='ml-3 text-2xl'></FcGoogle></button>

                        </div>
                    </form>
                    <p className='text-center'>Hey!! New here? <Link className='text-lg font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;