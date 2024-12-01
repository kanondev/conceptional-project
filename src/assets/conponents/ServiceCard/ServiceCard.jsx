import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {treatment,image,description,cost,id} = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">${cost}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <NavLink to={`/details/${id}`}>
                <button className="badge badge-outline btn btn-primary text-white font-bold bg-green-300">Checkout More</button>
                </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;