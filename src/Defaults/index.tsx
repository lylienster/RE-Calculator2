import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

const Defaults = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">RE Calculator</h1>

        <hr className="solid" />

        <Button
          variant="primary"
          onClick={() => {}}
          className="float-right"
          style={{ marginRight: "10px" }}
        >
          Reset Numbers
        </Button>
      </div>
    </div>
  );
};

export default Defaults;
