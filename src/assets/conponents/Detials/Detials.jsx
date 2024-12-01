import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Detials = () => {
    const { id, cost, description, image, treatment } = useLoaderData()
    // console.log(singleData)
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h2 className='text-gray-200 text-3xl font-semibold'>ID No: {id}</h2>
                    <p className='text-2xl text-green-300 mt-6 font-semibold'>Price:${cost}</p>
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Appoinment</button>
                </div>
            </div>
            <Modal treatment= {treatment}></Modal>
        </div>
    );
};

export default Detials;