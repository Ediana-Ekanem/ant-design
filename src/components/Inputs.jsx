import React, { useState } from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Space } from "antd";

const Inputs = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input.Search
        size="large"
        placeholder="Enter Name "
        prefix={<UserOutlined />}
        allowClear
        style={{ width: "400px", marginBottom: "20px" }}
      />
      <Input
        size="large"
        placeholder="Enter Name "
        prefix={<UserOutlined />}
        allowClear
        style={{ width: "400px", marginBottom: "20px" }}
      />

      <Space direction="vertical">
        {/* <Input.Password placeholder="input password" />
        <Input.Password
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        /> */}
        <Space direction="horizontal">
          <Input.Password
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
          <Button
            style={{
              width: 80,
            }}
            onClick={() => setPasswordVisible((prevState) => !prevState)}
          >
            {passwordVisible ? "Hide" : "Show"}
          </Button>
        </Space>
      </Space>
    </div>
  );
};

export default Inputs;
