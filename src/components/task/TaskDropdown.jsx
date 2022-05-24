import React from "react";

function TaskDropdown({ onChange, errorMessage, value }) {
  return (
    <div>
      <div className="custom-select m-3">
        <select
          name="taskPriority"
          className="bg-slate-900 text-orange-100 text-xl"
          onChange={onChange}
          value={value}
        >
          <option value="none">none</option>
          <option value="Important & Urgent">Important & Urgent</option>
          <option value="Important & Not Urgent">Important & Not Urgent</option>
          <option value="Not Important & Urgent">Not Important & Urgent</option>
          <option value="Not Important & Not Urgent">
            Not Important & Not Urgent
          </option>
        </select>
      </div>
      <small className="text-red-500 text-sm"> {errorMessage} </small>
    </div>
  );
}

export default TaskDropdown;
