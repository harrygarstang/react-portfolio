import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        contact me maybe!
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
    </div>
  );
}

export default Contact;
