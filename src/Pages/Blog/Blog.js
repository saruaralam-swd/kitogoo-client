import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
  return (
    <div className='px-5 md:px-10 lg:w-4/5 mx-auto my-10 space-y-5'>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <p className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'>Difference between SQL and NoSQL</p>
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <div>
              <h2 className='font-bold  text-2xl'>NoSQL</h2>
              <p className='font-semibold'> benefits of SQL databases</p>
              <li>High speed</li>
              <li>No coding needed</li>
              <li>Well defined standards</li>
              <li>Portability</li>
              <li>Multiple data view</li>
            </div>

            <div>
              <h2 className='font-bold  text-2xl'>NoSQL</h2>
              <p className='font-semibold'> benefits of NoSQL databases</p>
              <li>Flexible data models</li>
              <li>Fast queries</li>
              <li>Easy for developers</li>
              <li>Horizontal scaling</li>
            </div>

          </div>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <p className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'>What is JWT, and how does it work?</p>
        </div>
        <div className="collapse-content">
          <div className=' space-y-3'>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
            <p>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
            <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. </p>
            <div>
              <p className='font-semibold'>A JSON Web Token consists of 3 parts separated by a period.</p>
              <li>Header</li>
              <li>Payload</li>
              <li>Signature</li>
            </div>
          </div>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <p className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'>What is the difference between javascript and NodeJS?</p>
        </div>
        <div className="collapse-content">
          <div className='space-y-3'>
            <div>
              <h2 className='font-bold  text-2xl'>JavaScript</h2>
              <li>It's a programming language, after all. Any browser with a competent browser engine will operate.</li>
              <li>It's most commonly used on client-side servers</li>
              <li>It's made for creating network-centric apps.</li>
              <li>It's a new release of the ECMA script that works on the C++-based V8 engine.</li>
            </div>

            <div>
              <h2 className='font-bold  text-2xl'>NodeJs</h2>
              <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</li>
              <li>It's mainly popular on the server-side.</li>
              <li>It's made for real-time data-intensive apps that run on multiple platforms.</li>
              <li>C++, C, and JavaScript are used.</li>
            </div>
          </div>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <p className=' dark:text-violet-500 text-violet-900 hover:text-violet-600 text-2xl hover:underline'>  How does NodeJS handle multiple requests at the same time?</p>
        </div>
        <div className="collapse-content space-y-3">
          <p className="font-semibold">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
          <p>Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.</p>
          <p>The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.</p>
          <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
            NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.</p>
          <p>So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?</p>
          <p>The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself</p>
          <li>Node use js Non-blocking I/O</li>
        </div>
      </div>
    </div>
  );
};

export default Blog;