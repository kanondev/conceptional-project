import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatMents = () => {
    const services = useLoaderData()
    // console.log(services);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    services.map(service => <ServiceCard service= {service}></ServiceCard>)
                }
            </div>
    );
};

export default AllTreatMents;