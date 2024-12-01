import React from 'react';
import Banner from './Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    const services = useLoaderData()
    const {servicesData, feedBackData} = services
    return (
        <div className='w-[80%] mx-auto mx-w-[1600px]'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7'>
                {
                    servicesData.slice(0,4).map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <button className="flex btn btn-active btn-secondary mx-auto mt-8 mb-12 rounded">
                <NavLink to="/alltreatments">Show More</NavLink>
            </button>
            <div>
                <h2 className='font-bold text-5xl text-center p-5 nb-10'>Our clients Feedback</h2>
            </div>
                <FeedBack feedBackData={feedBackData}></FeedBack>
            
        </div>
    );
};

export default Home;