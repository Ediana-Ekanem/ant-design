import { Spin } from "antd";
import React, { useState } from "react";

const SpinComponent = () => {
  const [spin, setSpin] = useState(false);

  //   spin function
  const handleSpin = () => {
    setSpin((prevSpin) => !prevSpin);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Spin spinning={spin}></Spin>
      <button
        onClick={handleSpin}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "8px 16px",
          borderRadius: "3px",
          marginTop: "10px",
          border: "none",
        }}
      >
        Toggle Spining
      </button>
    </div>
  );
};

export default SpinComponent;
