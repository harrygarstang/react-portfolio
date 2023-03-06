import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Harry Garstang</h1>
        <p>
          Front-End Developer
        </p>
        <Link to="projects" role="button" className="btn btn-link Wahey">
          Take a look at some of my projects.
        </Link>
      </div>
    </div>
  );
}

export default Home;