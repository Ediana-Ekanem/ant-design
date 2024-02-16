import React, { useState } from "react";
import { Button } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div>
      <Button
        type="primary"
        onClick={handleClick}
        loading={loading}
        icon={<SyncOutlined />}
        size="large"
      >
        fetch Data
      </Button>
    </div>
  );
};

export default Buttons;
