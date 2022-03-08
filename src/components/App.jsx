import React, { useState } from "react";

function App() {
  //create & destructure state array to make a name object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function fullNameHandler(e) {
    //cannot pass e(event) directly into setFullName state destructured function -- must assign to variables
    //destructure the event object to assign key values as variables
    const { value, name } = e.target;
    //call state set function and include prevValue
    //determine which aspect of the state object is changing, and set the prevValue for other items
    setFullName((prevValue) => {
      if (name === "fName") {
        //have to return this updated object -- the new current state
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        //have to return this updated object -- becomes the new current state
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  //this functional App hook component returns the following below...
  return (
    <div className="container">
      <h1>
        {/* using dot notation with a state object composed of mutliple key values */}
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={fullNameHandler}
          // passing name into the handler to determine which key in the state object to update
          name="fName"
          placeholder="First Name"
          // explicitly setting value to the current state makes this a controlled input with a single source of truth
          value={fullName.fName}
        />
        <input
          onChange={fullNameHandler}
          // passing name into the handler to determine which key in the state object to update
          name="lName"
          placeholder="Last Name"
          // explicitly setting value to the current state makes this a controlled input with a single source of truth
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

//export App for use as component inside index.js
export default App;
