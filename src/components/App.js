import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


function App() {
  const [myData, setMyData] = useState([])
  const [formName, setFormName] = useState("")
  const [formURL, setFormURL] = useState("")
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  }
  const handleFormName = (e) => {
    setFormName(e.target.value)
  }
  const handleFormURL = (e) => {
    setFormURL(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formName,
        image: formURL,
        likes: 0
      })
    })
    .then(res => res.json())
    .then(returnData => {
      setMyData([...myData, returnData]) // I'm getting an error here I don't understand why.... Key issue
      // If I delete the last item in the list, the next time I go to Add an item it will give me errors, but stillworks.
      setFormName('')
      setFormURL('')
    })
  }
  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(rawData => setMyData(rawData))
  },[])

  return (
    <>
      <Header />
      {showForm ? 
        <ToyForm 
          formName={formName} 
          formURL={formURL} 
          handleSubmit={handleSubmit}
          handleFormName={handleFormName}
          handleFormURL={handleFormURL}
          />
          : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer myData={ myData }/>
    </>
  );
}

export default App;