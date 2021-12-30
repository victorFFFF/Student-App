function StundentGrades({ studentSelected, studentInfo, i }) {
  return (
    <div style={{ display: studentInfo[i]["gradeDisplayStyle"] }}>
      {/* List of all student grades */}
      {studentSelected[i].grades.map((index, i) => (
        <div key={i}>
          Test {i + 1} : &nbsp;&nbsp;&nbsp;&nbsp;{index}%
        </div>
      ))}
      <br></br>
    </div>
  );
}

export default StundentGrades;
