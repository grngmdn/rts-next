import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div>
        <h1>GET IN TOUCH</h1>
        <div>
          <p>NANDA GURUNG - CHAIRMAN</p>
          <p>grgnanda@hotmail.co.uk</p>
          <p>+44 7799791053</p>
        </div>
        <div>
          <p>DEV GURUNG - GENERAL SECRETARY</p>
          <p>devbahadur4073@gmail.com</p>
          <p>+44 7889541340</p>
        </div>
        <div>
          <p>YAM GURUNG - TREASURER</p>
          <p>grgy687@yahoo.com</p>
          <p>+44 7795951321</p>
        </div>
      </div>
      <hr />
      <div>
        <h2>
          Want us to contact you? Fill out the form below with questions and we
          will get back to you as soon as possible!
        </h2>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email Address' />
        <input type='text' placeholder='Phone Number' />
        <input type='text' placeholder='Message' />
        <button>SEND</button>
      </div>
      <div>
        <div>
          <Image width={100} height={120} src='/form.jpg' />
        </div>
        <div>
          <h4>WEBSITE DEVELOPER</h4>
          <h5>MADAN GURUNG</h5>
          <h5>FRONT-END MEDIA & WEB DEVELOPER</h5>
          <h4>CONTACT</h4>
          <li>EMAIL</li>
          <li>LINKEDIN</li>
          <li>WEBSITE</li>
        </div>
      </div>
    </>
  );
};

export default Contact;
