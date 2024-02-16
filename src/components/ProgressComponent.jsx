import { Progress } from "antd";
import React from "react";

const ProgressComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "500px",
        margin: "0 auto",
      }}
    >
      <Progress percent={100}></Progress>
      <Progress percent={70}></Progress>
      <Progress percent={70} type="circle" strokeColor="purple"></Progress>
      <Progress percent={90} type="line" strokeWidth={20}></Progress>
      <Progress
        percent={70}
        type="circle"
        strokeColor="green"
        status="success"
      ></Progress>
      <Progress
        percent={50}
        type="circle"
        strokeColor="red"
        status="exception"
      ></Progress>
      <Progress percent={40} steps={6} strokeColor="orange"></Progress>
    </div>
  );
};

export default ProgressComponent;
