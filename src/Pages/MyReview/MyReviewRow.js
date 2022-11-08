import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyReviewRow = ({ review , handleEdit, handleDelete}) => {
  const { _id, serviceName, email, photo, reviewDate, userName } = review;
  const { day, month, year } = reviewDate;
  
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{day}/{month}/{year}</div>
          </div>
        </div>
      </td>

      <td>
        {userName}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>

      <td>
        <div className='flex items-center gap-4'>
          <p>Helpful?</p>
          <p className='border px-2 py-1 rounded-md'>Yes {Math.floor(Math.random() * 100)}</p>
          <p className='border px-2 py-1 rounded-md'>No {Math.floor(Math.random() * 5)}</p>
        </div>
      </td>

      <th>
        <div className='flex gap-6'>
          <Link onClick={() => handleEdit(_id)} className='text-2xl' title='edit'><FaEdit /></Link>
          <Link onClick={() => handleDelete(_id)} className='text-2xl' title='delete'> <FaTrash /> </Link>
        </div>
      </th>
    </tr>
  );
};

export default MyReviewRow;