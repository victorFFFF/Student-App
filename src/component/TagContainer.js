import "./TagContainer.css";

function TagContainer({ studentSelected, setSelectedStudent, i }) {
  //Delete Tag when user clicks on it
  const deleteTag = (tagToBeDeleted, index) => {
    let temp = [...studentSelected];

    temp[index][`tags`] = temp[index][`tags`].filter((x) => {
      return x !== tagToBeDeleted;
    });
    setSelectedStudent(temp);
  };

  return (
    <div className="tagContainer">
      {/* List of tag*/}
      {studentSelected[i].tags.map((item, index) => (
        <div key={item}>
          {item ? (
            <button className="buttonTag" onClick={() => deleteTag(item, i)}>
              {item}
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default TagContainer;
