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

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviewer(data);

            })
    }, [user?.email])



    return (
        <div>
            <h2 className="text-5xl">You have {reviewer.length}</h2>

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
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewer.map(view => <DisplayReviewRow handleDelete={handleDelete} key={view._id} view={view}></DisplayReviewRow>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default DisplayReview;