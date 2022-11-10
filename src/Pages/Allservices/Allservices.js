import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllserviceCard from './AllserviceCard';


const Allservices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center'>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mt-10'>

                {
                    services.map(service => <AllserviceCard service={service} key={service._id}></AllserviceCard>)
                }
            </div>

        </div>
    );
};

export default Allservices;