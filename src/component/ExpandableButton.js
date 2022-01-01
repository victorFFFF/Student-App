import "./ExpandableButton.css";

function ExpandableButton({ studentInfo, setStudentInfo, id }) {
  //Change click symbol and show/hide text
  const clickedButton = () => {
    let style = studentInfo.filter((student) => student.id === String(id))[0][
      `gradeDisplayStyle`
    ];

    if (style === "none") {
      setStudentInfo((prevState) =>
        prevState.map((el) =>
          el.id === String(id)
            ? {
                ...el,
                gradeDisplayStyle: "block",
                buttonSymbol: <span> &#8722;</span>,
              }
            : el
        )
      );
    } else {
      setStudentInfo((prevState) =>
        prevState.map((el) =>
          el.id === String(id)
            ? {
                ...el,
                gradeDisplayStyle: "none",
                buttonSymbol: "+",
              }
            : el
        )
      );
    }
  };

  return (
    <button
      type="button"
      className={`buttonSymbol`}
      onClick={() => clickedButton()}
    >
      {studentInfo.filter((student) => student.id === id)[0][`buttonSymbol`]}
      {/* {studentInfo[i][`buttonSymbol`]} */}
    </button>
  );
}

export default ExpandableButton;
