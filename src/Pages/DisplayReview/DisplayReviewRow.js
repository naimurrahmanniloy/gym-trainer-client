import React, { useContext, useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const DisplayReviewRow = ({ view, handleDelete, handleStatusUpdate }) => {

    const { _id, reviewerName, email, message, img, status } = view;
    const { user } = useContext(AuthContext)


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                user?.photoURL ? <img src={img} /> :
                                    <FaUsers className='text-2xl mt-3'></FaUsers>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewerName}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {message}

            </td>
            <td>{email}</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'PENDING'}</button>
            </th>
        </tr>

    );
};

export default DisplayReviewRow;