import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/Authprovider';

const Register = () => {
    const { handleRegister, manageProfile } = useContext(authContext);
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;
        const image = e.target.image.value;
        if (password.length < 6) {
            setError("Password must be needed 6 charcter")
        }
        if (password !== cpassword) {
            setError("password does not match")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("password need one lowercase latter ")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("password need one Upercase latter ")
            return;
        }
        console.log(name, email, password, cpassword,image);
        handleRegister(email, password)
            .then(res => {
                manageProfile(name, image)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content ">
                <div className="text-center">
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Your Photo URL" className="input input-bordered" />
                        </div>
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Confrem Password</span>
                            </label>
                            <input type="password" name='cpassword' placeholder="Confrem Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {error && <p className='text-red-500 text-center font-semibold p-2 mb-4'>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;