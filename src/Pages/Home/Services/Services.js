import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mt-10'>
                <p className='text-2xl font-bold text-orange-700'>Services</p>
                <h2 className="text-5xl font-semibold">Service Area</h2>
                <p>Will provide the best service for you. This will make you Fit also. <br></br> Become a healthy person of all the time</p>
            </div>
            <div>
                <h2>Service : {services.length}</h2>
            </div>
        </div>
    );
};

export default Services;