import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/supli.jpg'

const StoreSuppliment = () => {
    return (
        <div data-aos="fade-down-left">
            <div className="hero mb-10  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-2/3'>
                        <img src={img} className=" rounded-lg w-2/3" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Available Natural Suppliment</h1>
                        <p className="py-6">Suppliment helps to recover body. Body needs to be refreshed and also need protein thats why you can buy it from the store. Low price Store.</p>
                        <a target='_blank' href='https://www.nutritiondepot.com.bd/'>  <button className="btn btn-primary">Go There</button></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default StoreSuppliment;