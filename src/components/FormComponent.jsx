import React, { useState } from "react";
import { Button, Form, Input, message, Alert } from "antd";

const FormComponent = () => {
  const [alert, setAlert] = useState(false);
  const formItemLayout = {
    labelCol: { span: 24 }, // Set the label column to span the entire width
    wrapperCol: { span: 24 }, // Set the wrapper column to span the entire width
  };

  const handleButton = () => {
    // console.log({ values });

    setTimeout(() => {
      // message.error("Logged in Successfully");
      setAlert(true);
    }, 3000);
  };
  return (
    <div>
      <div style={{ marginBottom: "5px" }}>
        {alert && (
          <Alert
            type="success"
            message="Successful"
            description="You have successfully Logged in"
            closable
          />
        )}
      </div>
      <Form
        onFinish={handleButton}
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px 50px",
        }}
      >
        <Form.Item
          label=" Names :"
          name="names"
          {...formItemLayout}
          rules={[
            {
              required: "true",
              message: "Please enter your name",
            },
          ]}
        >
          <Input placeholder="Names" />
        </Form.Item>
        <Form.Item
          label="User Name"
          name="username"
          {...formItemLayout}
          rules={[
            {
              required: "true",
              message: "Please enter your Email",
            },
          ]}
        >
          <Input placeholder="User Name" required />
        </Form.Item>
        <Form.Item
          label="Password :"
          name="password"
          {...formItemLayout}
          rules={[
            {
              required: "true",
              message: "Please enter your Password",
            },
          ]}
        >
          <Input.Password placeholder="Password" required />
        </Form.Item>
        <Form.Item>
          <Button
            block
            style={{
              backgroundColor: "purple",
              color: "white",
              fontWeight: "bold",
            }}
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
