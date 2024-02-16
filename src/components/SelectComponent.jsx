import React from "react";
import { Select } from "antd";

const SelectComponent = () => {
  const colors = ["Red", "Blue", "Gray", "Purple", "White", "Orange", "Brown"];
  return (
    <div style={{ color: "white" }}>
      <Select
        mode="multiple"
        maxTagCount={3}
        allowClear
        placeholder="Select Colors"
        style={{ width: "200px" }}
      >
        {colors.map((color, index) => {
          return (
            <Select.Option key={index} value={color}>
              {color}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectComponent;
