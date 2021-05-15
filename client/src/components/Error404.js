import React from "react";

const Error404 = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center text-uppercase">Error 404!</h1>
        </div>
      </div>
      <div className="alert alert-danger text-center my-5 p-5">
        <h2>The page you are looking for, does not exist!</h2>
      </div>
    </div>
  );
};

export default Error404;
