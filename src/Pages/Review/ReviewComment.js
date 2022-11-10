import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewComment = () => {
    const { user } = useContext(AuthContext);

    const handlePostReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'UnAuthorized';
        const photo = user?.photoURL;
        const message = form.message.value;

        const review = {
            reviewerName: name,
            email,
            message,
            img: photo
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Comment posted successfully');
                    form.reset()
                }
            })
            .catch(er => console.log(er))
    }

    return (
        <div>
            <form onSubmit={handlePostReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered input-info w-full " required />
                    <input type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-info w-full " />
                </div>
                <textarea className="textarea textarea-error w-full mt-5 p-10" name='message' placeholder="Your valuable Comment" required></textarea>

                <div className='text-center p-10'>
                    <input className='btn btn-primary mx-auto' type="submit" value="Place Your Review" />
                </div>
            </form>
        </div>
    );
};

export default ReviewComment;