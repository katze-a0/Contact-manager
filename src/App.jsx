import React, { useState } from "react";
import Contact from "./components/Contact.jsx";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const getContacts = JSON.parse(localStorage.getItem("contact_obj"));
  const [contact_obj, setContact_obj] = useState(
    getContacts ? getContacts : []
  );

  const addContactsData = (contactdata_obj) => {
    setContact_obj([...contact_obj, contactdata_obj]);
    localStorage.setItem(
      "contact_obj",
      JSON.stringify([...contact_obj, contactdata_obj])
    );
  };

  // const saveData = () => {
  //   localStorage.setItem("name", "value");
  // };

  // const getData = () => {
  //   localStorage.getItem("name");
  // };

  const deleteContact = (id) => {
    localStorage.removeItem("name");
    const updatedContacts = contact_obj.filter((contact) => contact.id !== id);
    setContact_obj(updatedContacts);
    localStorage.setItem("contact_obj", JSON.stringify(updatedContacts));
  };
  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactsData} />
      </div>
      <div className="contact_list">
        <h3 style={{ color: "white", fontSize: "22px" }}>
          {" "}
          Available Contact list:{" "}
        </h3>
        {contact_obj.map((data) => (
          <Contact key={data.id} data={data} onDelete={deleteContact} />
        ))}
        {/* <button onClick={saveData}>Save Data</button>
        {/* <button onClick={getData}>Get Data</button> 
        <button onClick={clearData} className="delete_button">
          Delete name
        </button> */}
      </div>
    </>
  );
}

export default App;
