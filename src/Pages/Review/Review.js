import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReviewComment from './ReviewComment';

const Review = () => {
    const { name, picture, detail, price } = useLoaderData()
    return (
        <div>
            <div className="card lg:card-side shadow-lg">
                <figure><PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h1 className="card-title text-3xl">{name}</h1>
                    <p className='text-xl'>{detail}</p>
                    <p className='text-xl font-bold mt-4'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">CheckOut</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-center font-bold mt-5 mb-10'>Comment Your Reviews here</h1>
                <ReviewComment className='mb-10 '></ReviewComment>
            </div>
        </div >


    );
};

export default Review;