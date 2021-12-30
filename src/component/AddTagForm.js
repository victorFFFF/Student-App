import "./AddTagForm.css";
import { useState } from "react";

function AddTagForm({ studentSelected, setSelectedStudent, i }) {
  const [inputToAddTag, setInputToAddTag] = useState([]);

  //Handle input for adding tags
  const handleAddTagInput = (i) => (e) => {
    e.preventDefault();
    let temp = [...inputToAddTag];
    temp[i] = e.target.value;
    setInputToAddTag(temp);
  };

  //Handle adding tag
  const processSubmit = (i) => (e) => {
    e.preventDefault();
    setInputToAddTag([]);

    let copy = [...studentSelected];
    //Check for duplicate tags
    if (copy[i].tags.indexOf(inputToAddTag[i]) < 0) {
      copy[i].tags.push(inputToAddTag[i]);
      setSelectedStudent(copy);
    }
  };

  return (
    <form onSubmit={processSubmit(i)}>
      <input
        value={inputToAddTag[i] ? inputToAddTag[i] : ""}
        type="text"
        className="addTag"
        placeholder="Add a tag"
        onChange={handleAddTagInput(i)}
      ></input>
      <input type="submit" style={{ display: `none` }} />
    </form>
  );
}

export default AddTagForm;
