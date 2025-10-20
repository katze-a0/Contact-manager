import React, { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = () => {
    const contactdata_obj = {
      id: Math.random(),
      name: name,
      number: num,
      location: location,
    };
    props.onContactAdded(contactdata_obj);
  };

  return (
    <>
      <h2>Enter Contact details:</h2>
      <br />
      <input
        type="text"
        value={name}
        placeholder="contact name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        value={num}
        placeholder="number"
        onChange={(e) => setNum(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        value={location}
        placeholder="location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <br />
      <button onClick={onClickHandler}>Add Contact</button>
    </>
  );
};
export default ContactAdder;
