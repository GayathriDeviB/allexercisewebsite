import React from "react";
import "./addproject.css";
const AddProject = () => {
  return (
    <div className="addprojectmain">
      <form>
        <h2>Add Project</h2>
        <input type="text" placeholder="Project title" />
        <textarea placeholder="Project description" rows={10}></textarea>
      </form>
      <form>
        <h3>Preview</h3>
        <input type="file" />
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddProject;
