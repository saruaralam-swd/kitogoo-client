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
              review.map(rew => <MyReviewRow key={rew._id} review={rew}></MyReviewRow>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyReview;