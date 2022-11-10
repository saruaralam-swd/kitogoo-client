import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
  useTitle('All Review')
  const { user, logOut } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getReviewByEmail?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('kitogoo-token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logOut()
          localStorage.removeItem('kitogoo-token');
        }
        return res.json()
      })
      .then(data => {
        console.log(data);
        if (data.code === 404) {
          return;
        }
        setReview(data)
      });
  }, [user?.email, logOut])

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
    const permission = window.confirm('Are You Sure ? Want to delete this review');

    if (permission) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = review.filter(rew => rew._id !== id);
            setReview(remaining);
            toast.success('Successfully delete');
          }
        })
    }
  };

  return (
    <div className='min-h-[300px]'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service</th>
              <th>User Info</th>
              <th>Status</th>
              <th>Your Review</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              review.map(rew => <MyReviewRow key={rew._id} review={rew} handleEdit={handleEdit} handleDelete={handleDelete}></MyReviewRow>)
            }
          </tbody>

        </table>

        {
          review.length === 0 &&
          <div className='h-[300px]  flex items-center justify-center'>
            <h2 className='text-3xl font-semibold'>No reviews were added</h2>
          </div>
        }
      </div>
    </div>
  );
};

export default MyReview;