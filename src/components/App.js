import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


function App() {
  const [myData, setMyData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(rawData => setMyData(rawData))
  },[])
  
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer myData={ myData }/>
    </>
  );
}

export default App;
