function StundentGrades({ studentSelected, studentInfo, id }) {
  return (
    <div
      style={{
        display: studentInfo.filter((student) => student.id === id)[0][
          "gradeDisplayStyle"
        ],
      }}
    >
      {/* List of all student grades */}
      {studentSelected
        .filter((student) => student.id === id)[0]
        .grades.map((element, i) => (
          <div key={i}>
            Test {i + 1} : &nbsp;&nbsp;&nbsp;&nbsp;{element}%
          </div>
        ))}
      <br></br>
    </div>
  );
}

export default StundentGrades;
