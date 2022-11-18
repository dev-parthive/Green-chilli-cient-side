import React from 'react';

const Blog = () => {
    return (
        <div className='py-8'> 
        <div>
            <h2 className='text-center mb-4 text-3xl '>Frequently Asked Question</h2>
        </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-500 bg-base-100 rounded-box py-3">
  <div className="collapse-title text-xl font-medium">
  Difference between SQL and NoSQL
  </div>
  <div className="collapse-content"> 
    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus border border-base-500 mt-5 py-3 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is JWT, and how does it work?
  </div>
  <div className="collapse-content"> 
    <p>JSON token is Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus border border-base-500 mt-5 py-3 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content"> 
    <p>Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet.Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed.JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
  </div>
</div>


<div tabIndex={0} className="collapse collapse-plus border border-base-500 mt-5 py-3 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content"> 
    <p>The handle 40K requests per second having Node.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
  </div>
</div>
        </div>
    );
};

export default Blog;