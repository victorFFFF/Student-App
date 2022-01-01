import "./AddTagForm.css";
import { useState } from "react";

function AddTagForm({ studentSelected, setSelectedStudent, index }) {
  const [inputToAddTag, setInputToAddTag] = useState([]);

  //Handle input for adding tags
  const handleAddTagInput = (index) => (e) => {
    e.preventDefault();
    let temp = [...inputToAddTag];
    temp[index] = e.target.value;
    setInputToAddTag(temp);
  };

  //Handle adding tag
  const processSubmit = (index) => (e) => {
    e.preventDefault();
    setInputToAddTag([]);

    let copy = [...studentSelected];
    //Check for duplicate tags
    if (copy[index].tags.indexOf(inputToAddTag[index]) < 0) {
      copy[index].tags.push(inputToAddTag[index]);
      setSelectedStudent(copy);
    }
  };

  return (
    <form onSubmit={processSubmit(index)}>
      <input
        value={inputToAddTag[index] ? inputToAddTag[index] : ""}
        type="text"
        className="addTag"
        placeholder="Add a tag"
        onChange={handleAddTagInput(index)}
      ></input>
      <input type="submit" style={{ display: `none` }} />
    </form>
  );
}

export default AddTagForm;
