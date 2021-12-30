import "./ExpandableButton.css";

function ExpandableButton({ studentInfo, setStudentInfo, i }) {
  //Change click symbol and show/hide text
  const clickedButton = (i) => {
    let copyOfStudentInfo = [...studentInfo];
    if (copyOfStudentInfo[i][`gradeDisplayStyle`] === "none") {
      copyOfStudentInfo[i][`gradeDisplayStyle`] = "block";
      copyOfStudentInfo[i][`buttonSymbol`] = <span> &#8722;</span>;
    } else {
      copyOfStudentInfo[i][`gradeDisplayStyle`] = "none";
      copyOfStudentInfo[i][`buttonSymbol`] = "+";
    }
    setStudentInfo(copyOfStudentInfo);
  };

  return (
    <button
      type="button"
      className={`buttonSymbol`}
      onClick={() => clickedButton(i)}
    >
      {studentInfo[i][`buttonSymbol`]}
    </button>
  );
}

export default ExpandableButton;
