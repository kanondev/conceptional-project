import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/Authprovider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// const contextValue = useContext(authContext)
const Login = () => {
    const { handleGoogleLogin, handleLogIn } = useContext(authContext);

    const [error, setError]= useState("");
    const location = useLocation()
    const Navigate = useNavigate()
    
    const handelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogIn(email, password)
        .then(res=>{
            Navigate(location.state.from)
        })
        .catch(err=>{
            setError(err.message);
        })
    }

    const googleLoginHandler = () =>{
        handleGoogleLogin()
        .then(res =>{
            Navigate(location.state.from)
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handelSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {/* <button onClick={handleLogOut}>Logout</button> */}
                        </form>
                        {error && <p className='text-red-500 text-center'> {error}</p>}
                        <button onClick={googleLoginHandler}> SignIn with Google </button>
                        <div className='text-center text-red-400 font-semibold'>
                            New to The Website? Please: <NavLink to="/signup">SignUp here</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;