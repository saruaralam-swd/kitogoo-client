import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
  useTitle('Add Services')
  const { user } = useState(AuthContext);

  const handleAddServices = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const createService = {
      title,
      img,
      price,
      description,
      date: new Date().getTime()
    };
    
    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(createService)
    })
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged) {
        alert('service added')
        form.reset();
      }
    })
  };

  return (
    <div className='my-10 md:w-3/5 px-5 md:px-0 mx-auto'>
      <h2 className='md:text-center font-semibold text-2xl md:text-3xl mb-5'>Add your preferred service</h2>
      <p>service name for text </p>
      <p>img link for test: https://img.freepik.com/premium-vector/suv-car-beach_9645-1693.jpg?w=740</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam similique, voluptatibus sit fugit perspiciatis deleniti neque incidunt numquam dicta esse ullam reiciendis nostrum, vero vitae a molestias aspernatur pariatur inventore! Minima esse qui veritatis minus repudiandae illo molestiae soluta nesciunt blanditiis quis expedita rem ipsa nam in sit recusandae tempore tenetur sapiente, aut ducimus pariatur autem. Temporibus, harum exercitationem. Fugit aperiam eaque consequatur dolore maxime nulla quas laboriosam eveniet dolor similique odio iste expedita at perferendis numquam, autem saepe excepturi aliquid ex molestias dicta modi! Voluptates labore quia eaque rerum ut laudantium accusamus ullam magnam, impedit quibusdam distinctio numquam cum. Tempora rem atque natus nisi et eligendi aliquid! Sint nostrum deleniti rerum itaque beatae eveniet quod, repellendus nisi esse perferendis. Nam obcaecati quaerat corrupti eius quos aliquam earum asperiores, mollitia, nostrum, reprehenderit voluptatem culpa quod inventore. Neque eaque temporibus voluptates voluptate odio velit earum cum perspiciatis, ad iusto minus sed maxime iste possimus harum qui minima, suscipit, quia eos tempora unde quo. Esse rem maiores a harum quisquam autem similique quibusdam dignissimos dolore deserunt soluta officiis dolor, aperiam dolorem incidunt facilis totam laudantium et inventore error adipisci hic nulla! Modi odit iure atque optio? Impedit tenetur voluptas fugit voluptatem?</p>
      <form onSubmit={handleAddServices} className='space-y-5'>
        <div className='grid gap-5'>
          <input type="text" name='title' placeholder="Service Name" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
          <input type="text" name="photoURL" placeholder="service img" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
          <input type="number" name='price' placeholder="Service price" className="border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1" required />
        </div>

        <textarea name='description' placeholder="Write your message about this" className="placeholder:italic border-2 focus:outline-2 focus:outline-indigo-500  rounded-md px-4 py-1 w-full" required />

        <button className='bg-indigo-600 px-4 py-1 font-semibold rounded-md hover:bg-indigo-700 text-white'>Create New Service</button>
      </form>
    </div>
  );
};

export default AddServices;