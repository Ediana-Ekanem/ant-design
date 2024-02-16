import { DatePicker, TimePicker } from "antd";
import moment from "moment"; // Import moment library for time manipulation
import React from "react";

const DatenTime = () => {
  // Import moment library outside the component
  const momentInstance = moment();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "5px" }}>
        <DatePicker picker="month" />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <DatePicker.RangePicker picker="month" />
      </div>
      <div>
        <h1 style={{ color: "white" }}>Hour Picker Example</h1>
        <TimePicker format="mm" defaultValue={momentInstance} />
        {/* Set format="HH" */}
      </div>
    </div>
  );
};

export default DatenTime;
