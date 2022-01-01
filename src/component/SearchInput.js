import "./SearchInput.css";

import { useState } from "react";

function SearchInput({ setSelectedStudent, studentInfo }) {
  const [searchInput, setSearchInput] = useState({
    nameSearchInput: "",
    tagSearchInput: "",
  });

  //Handle input for searching names and tags
  const HandleSearch = (e) => {
    e.preventDefault();
    setSelectedStudent([]);

    setSearchInput({ ...searchInput, [e.target.name]: e.target.value });

    if (e.target.name === "nameSearchInput") {
      if (searchInput[`tagSearchInput`].length) {
        FindIntersection(e.target.value, searchInput[`tagSearchInput`]);
      } else setSelectedStudent(findName(e.target.value));
    } else {
      if (searchInput[`nameSearchInput`].length) {
        FindIntersection(searchInput[`nameSearchInput`], e.target.value);
      } else setSelectedStudent(findTag(e.target.value));
    }

    if (!e.target.value.length) setSelectedStudent(studentInfo);
  };

  //Search for names
  const findName = (e) => {
    let result = [];
    for (let i = 0; i < studentInfo.length; i++) {
      let studentFullName = studentInfo[i].fullName.toUpperCase();

      if (studentFullName.includes(e.toUpperCase())) {
        result.push(studentInfo[i]);
      }
    }
    return result;
  };

  //Search for tags
  const findTag = (tagInput) => {
    let result = [];

    for (let i = 0; i < studentInfo.length; i++) {
      for (let j = 0; j < studentInfo[i][`tags`].length; j++) {
        if (studentInfo[i][`tags`][j].toString().includes(tagInput)) {
          result.push(studentInfo[i]);
          break;
        }
      }
    }
    return result;
  };

  const FindIntersection = (name, tag) => {
    let nameArray = findName(name);
    let tagArray = findTag(tag);
    let intersect = nameArray.filter((element) => tagArray.includes(element));

    setSelectedStudent(intersect);
  };

  return (
    <div>
      <input
        type={`text`}
        name={`nameSearchInput`}
        className={`inputName`}
        placeholder={`Search by name`}
        onChange={HandleSearch}
      ></input>

      <input
        type={`text`}
        name={`tagSearchInput`}
        className={`inputTag`}
        placeholder={`Search by tag`}
        onChange={HandleSearch}
      ></input>
    </div>
  );
}

export default SearchInput;
