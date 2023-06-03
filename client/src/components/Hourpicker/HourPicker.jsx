import React from "react";

const HourPicker = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "#555" }}>
      <h1>Please pick your convinient Time of the selected Day</h1>
      <label>Hour</label>
      <select name="hour" id="hour" onChange={handleChange}>
        <option id="1" value="1">
          8-9
        </option>
        <option id="2" value="2">
          9-10
        </option>
        <option id="3" value="3">
          10-11
        </option>
        <option id="4" value="4">
          11-12
        </option>
        <option id="5" value="5">
          12-1
        </option>
        <option id="6" value="6">
          1-2
        </option>
        <option id="7" value="7">
          2-3
        </option>
      </select>
    </div>
  );
};

export default HourPicker;
