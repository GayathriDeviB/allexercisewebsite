import React from "react";
import "./addpost.css";
const Addpost = () => {
  return (
    <div className="addpostmain">
      <div className="create">
        <h3>Create a post</h3>
        <div className="preview_image">
          <h4>Image Preview</h4>
          <input type="file" placeholder="Choose file" required />
        </div>
      </div>
      <form>
        <input type="text" placeholder="Title" required />
        <textarea
          placeholder="Description goes here"
          rows="20"
          cols="50"
          required
        ></textarea>
        <button>Add post to feed</button>
      </form>
    </div>
  );
};
export default Addpost;
