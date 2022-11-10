import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div data-aos="fade-right" className="bg-base-200">
            <h1 className='text-4xl text-center font-bold mt-10'>About </h1>
            <div className="hero p-10 bg-base-200">

                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Why me?</h1>
                        <p className="py-6">It is really a regret that now days junk foods are roaming around very much. For this reason Some of the peoples are not able to stay fit. So to stay you feet I have services that helps you to reduce fat and become a healthy person.</p>
                        <div className='text-center mt-10'>
                            <Link to='/allservices'><button className="btn btn-outline w-1/2 ">See All Services</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;