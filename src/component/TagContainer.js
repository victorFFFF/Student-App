import "./TagContainer.css";

function TagContainer({
  studentSelected,
  setSelectedStudent,
  setStudentInfo,
  id,
}) {
  //Delete Tag when user clicks on it
  const deleteTag = (tagToBeDeleted, id) => {
    setSelectedStudent((prevState) =>
      prevState.map((el) =>
        el.id === id
          ? { ...el, tags: el.tags.filter((tag) => tag !== tagToBeDeleted) }
          : el
      )
    );

    setStudentInfo((prevState) =>
      prevState.map((el) =>
        el.id === id
          ? { ...el, tags: el.tags.filter((tag) => tag !== tagToBeDeleted) }
          : el
      )
    );
  };

  return (
    <div className="tagContainer">
      {/* List of tag*/}
      {studentSelected
        .filter((student) => student.id === id)[0]
        .tags.map((item) => (
          <div key={item}>
            {item.length > 0 && (
              <button className="buttonTag" onClick={() => deleteTag(item, id)}>
                {item}
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default TagContainer;
