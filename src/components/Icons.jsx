import React from "react";
import {
  IeCircleFilled,
  AlertTwoTone,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Icons = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IeCircleFilled style={{ color: "blue", fontSize: "200px" }} />
      <AlertTwoTone style={{ color: "green", fontSize: "200px" }} />
      <WhatsAppOutlined style={{ color: "green", fontSize: "200px" }} />
    </div>
  );
};

export default Icons;
