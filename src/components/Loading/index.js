import React from "react";

import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          background: "black",
          opacity: 0.2,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="border" role="status" size="xl">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default Loading;
