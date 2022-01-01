import "./StudentContainer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TagContainer from "./TagContainer";
import SearchInput from "./SearchInput";
import StudentGrades from "./StudentGrades";
import StudentInformation from "./StudentInformation";
import AddTagForm from "./AddTagForm";
import ExpandableButton from "./ExpandableButton";

function StudentContainer() {
  const [studentInfo, setStudentInfo] = useState([]);
  const [studentSelected, setSelectedStudent] = useState([]);

  //Call api, assign and store additional keys such as grade average, tags, and etc...
  const getStudents = async () => {
    await axios
      .get(`https://api.hatchways.io/assessment/students`)
      .then((result) => {
        let results = result.data.students;
        let reducer = (a, b) => a + b;

        for (let i = 0; i < results.length; i++) {
          results[i][`gradeDisplayStyle`] = "none";
          results[i]["tags"] = [];
          results[i]["average"] = "";
          results[i]["fullName"] =
            results[i].firstName + " " + results[i].lastName;
          results[i][`buttonSymbol`] = "+";
          results[i][`average`] =
            results[i].grades.map((i) => Number(i)).reduce(reducer) /
            results[i].grades.length;

          setStudentInfo((studentInfo) => [...studentInfo, results[i]]);
          setSelectedStudent((studentSelected) => [
            ...studentSelected,
            results[i],
          ]);
        }
      });
  };

  useEffect(() => {
    let isApiSubscribed = true;
    getStudents();

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className="container">
      <div className="searchContainer">
        {/* Search Name and tag */}
        <SearchInput
          type={`text`}
          setSelectedStudent={setSelectedStudent}
          studentInfo={studentInfo}
        ></SearchInput>
      </div>

      {/* List of student displayed */}
      <div>
        {studentSelected.map((element, index) => (
          <div key={element.id} className="studentContainer">
            <img src={element.pic} alt="student"></img>
            <div className="text">
              <StudentInformation element={element}></StudentInformation>
              <ExpandableButton
                studentInfo={studentInfo}
                setStudentInfo={setStudentInfo}
                id={element.id}
              ></ExpandableButton>

              <StudentGrades
                studentSelected={studentSelected}
                studentInfo={studentInfo}
                id={element.id}
              ></StudentGrades>

              <TagContainer
                studentSelected={studentSelected}
                setSelectedStudent={setSelectedStudent}
                setStudentInfo={setStudentInfo}
                id={element.id}
              ></TagContainer>

              {/* Form for adding a tag  */}
              <AddTagForm
                studentSelected={studentSelected}
                setSelectedStudent={setSelectedStudent}
                index={index}
              ></AddTagForm>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default StudentContainer;
