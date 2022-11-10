import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='p-8'>
            <div className='text-center mt-10 mb-3'>
                <p className='text-2xl font-bold text-orange-700'>Services</p>
                <h2 className="text-5xl font-semibold">Service Area</h2>
                <p>Will provide the best service for you. This will make you Fit also. <br></br> Become a healthy person of all the time</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mt-10' data-aos="fade-down">

                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/allservices'><button className="btn btn-outline w-1/2 ">See All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;