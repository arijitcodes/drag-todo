import React from "react";

const About = () => {
  return (
    <div className="container-fluid my-4">
      <h1 className="text-dark">About Draggable Todo App</h1>
      <p className="my-1 text-dark">This is a Full Stack Draggable Todo App.</p>
      <div className="my-5">
        <h3>Technologies Used:</h3>
        <div className="ml-2 mt-4">
          <h5>Backend (REST API):</h5>
          <p>Node, Express, Mongoose, MongoDB, Dotenv</p>
        </div>
        <div className="ml-2 mt-3">
          <h5>Frontend:</h5>
          <p>React, React Router Dom, Axios, React Beautiful DND</p>
        </div>
      </div>
      <div className="ml-2 d-flex flex-row align-items-center justify-content-start">
        <h6 className="mr-2">Author:</h6>
        <h6>
          <a
            href="https://github.com/ArijitCodes"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            Arijit Banerjee
          </a>
        </h6>
      </div>
      <p className="bg-secondary text-light p-2 mt-4">
        <strong>Version: </strong>1.0.1
      </p>
    </div>
  );
};

export default About;
