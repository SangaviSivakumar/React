import { useState } from "react";

const Card = ({ id, title, pic, category, RemoveData, UpdateData }) => {
  const [newCategory, setNewCategory] = useState("");

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <p>{id}</p>
      <h3>{title}</h3>
      <img src={pic} alt="pic" width="100" />
      <h4>{category}</h4>

      <input
        type="text"
        placeholder="Enter New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={() => {
        UpdateData(id, newCategory);
        setNewCategory(""); // optional: clear input after update
      }}>
        Update
      </button>

      <br /><br />

      <button onClick={() => RemoveData(id)}>Remove</button>
    </div>
  );
};

export default Card;
