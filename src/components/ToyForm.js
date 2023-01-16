import React from "react";

function ToyForm({formName, formURL, handleSubmit, handleFormURL, handleFormName}) {

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formName}
          onChange={handleFormName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formURL}
          onChange={handleFormURL}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
