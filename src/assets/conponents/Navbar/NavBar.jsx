import React, { useContext } from 'react';
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/Authprovider';

const NavBar = () => {
    const { user, handleLogOut } = useContext(authContext)
    return (
        <div className='min-h-20 bg-green-200 flex justify-between items-center'>
            <div>
                <h2 className="text-3xl font-extrabold ml-4">Teeth Health </h2>
            </div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/alltreatments" className="ml-4">All treatments</NavLink>
                <NavLink to="/myappoinments" className="ml-4"> My appoinments</NavLink>
                <NavLink to="/profile" className="ml-4">profile</NavLink>
                <NavLink to="/login" className="ml-4">Login</NavLink>
            </div>
            <div>
                {
                    user?.email ? (
                        <div>
                            <img sec = {user.photoURL} alt='profile' />
                            <button onClick={handleLogOut}>Logout</button>
                        </div>
                    ) : <NavLink to="/login">
                        <button className='btn btn-primary mr-4'>Login</button>
                    </NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;