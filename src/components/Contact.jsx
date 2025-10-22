import { Edit, Trash2 } from "lucide-react";
const Contact = (props) => {
  const saveData = () => {
    localStorage.setItem("name", "value");
  };

  const handleDelete = () => {
    props.onDelete(props.data.id);
  };

  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.number}</td>
      <td>{props.data.location}</td>
      <td>
        <div className="action_buttons">
          <button onClick={saveData} className="edit_button">
            Edit
            <Edit size={22} />
          </button>
          <button onClick={handleDelete} className="delete_button">
            Delete
            <Trash2 size={22} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Contact;
