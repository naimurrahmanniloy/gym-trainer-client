import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, picture, name, detail, price } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{detail.slice(0, 100)}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button></Link>


                </div>
            </div>
        </div >
    );
};

export default ServiceCard;