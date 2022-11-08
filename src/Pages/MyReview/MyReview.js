import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewByEmail?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReview(data));
  }, [user?.email])

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    const permission = window.confirm('Are You Sure ? Want to delete this review');

    if (permission) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = review.filter(rew => rew._id !== id);
            setReview(remaining);
            alert("Successfully delete");
          }
        })
    }
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service</th>
              <th>User Info</th>
              <th>Status</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              review.length === 0 ?
                <>
                  <div className='text-center'>
                    <h2 className='text-4xl font-semibold'>No reviews were added</h2>
                  </div>
                </>
                :
                review.map(rew => <MyReviewRow key={rew._id} review={rew} handleEdit={handleEdit} handleDelete={handleDelete}></MyReviewRow>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyReview;