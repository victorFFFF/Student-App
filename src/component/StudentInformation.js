import "./StudentInformation.css";

function StudentInformation({ element }) {
  return (
    <div>
      <h1>
        {element.firstName.toUpperCase() + " "}
        {element.lastName.toUpperCase()}
      </h1>
      <p>Email: {element.email}</p>
      <p>Company: {element.company}</p>
      <p>Skill: {element.skill}</p>
      <p>Average: {element.average}%</p>
      <br></br>
    </div>
  );
}

export default StudentInformation;
