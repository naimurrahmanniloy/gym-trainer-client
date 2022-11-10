import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { name } = useLoaderData()
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Review;