import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DisplayReviewRow from './DisplayReviewRow';

const DisplayReview = () => {
    const { user } = useContext(AuthContext);
    const [reviewer, setReviewer] = useState([])

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this comment?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted')
                        const remaining = reviewer.filter(viewr => viewr._id !== id);
                        setReviewer(remaining)
                    }
                })
        }

    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'APPROVED' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviewer.filter(viewr => viewr._id !== id);
                    const approving = reviewer.find(viewr => viewr._id === id)
                    approving.status = "APPROVED"

                    const newReviewrs = [approving, ...remaining];
                    setReviewer(newReviewrs)
                }
            })

    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewer(data);

            })
    }, [user?.email])



    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button className='btn btn-ghost'>X</button>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewer.map(view => <DisplayReviewRow
                                handleStatusUpdate={handleStatusUpdate} handleDelete={handleDelete} key={view._id} view={view}></DisplayReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default DisplayReview;