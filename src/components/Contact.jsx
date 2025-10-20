const Contact = (props) => {
  const saveData = () => {
    localStorage.setItem("name", "value");
  };

  // const getData = () => {
  //   localStorage.getItem("name");
  // };

  const handleDelete = () => {
    props.onDelete(props.data.id);
  };
  return (
    <>
      <div className="contact">
        Name: {props.data.name}
        <br />
        Number: {props.data.number}
        <br />
        Location: {props.data.location}
        <br />
        <button onClick={saveData}>Edit Data</button>
        {/* <button onClick={getData}>Get Data</button> */}
        <button onClick={handleDelete} className="delete_button">
          Delete name
        </button>
      </div>
      <hr />{" "}
    </>
  );
};
export default Contact;
