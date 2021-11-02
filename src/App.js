import './App.css';
import { useState, useEffect } from 'react';
import coursesData from './data/courses/coursesData';
import getLocalStorageOrDefault from './hooks/getLocalStorageOrDefault';
import ProgramCourses from './components/ProgramCourse';

function App() {
  const [grades, setGrades] = useState(getLocalStorageOrDefault('grades', {}));

  const gradeChangeHandler = (event) => {
    const { name, value } = event.target;

    if (value < 0 || value > 10) {
      return;
    }
    const newGrades = { ...grades, [name]: Number(value) };

    const course = coursesData.find((courseItem) => courseItem.id === name);
    if (course && course.passes) {
      course.passes.forEach((passesCode) => {
        const passesGrades = [];
        const passedCourse = coursesData.find(
          (courseItem) => courseItem.id === passesCode
        );
        passedCourse.passesFrom.forEach((passesFromCode) => {
          if (newGrades[passesFromCode] !== undefined) {
            passesGrades.push(Number(newGrades[passesFromCode]));
          }
        });
        newGrades[passesCode] = Math.max(...passesGrades);
      });
    }
    setGrades((prevGrades) => ({ ...prevGrades, ...newGrades }));
  };

  useEffect(() => {
    localStorage.setItem('grades', JSON.stringify(grades));
  }, [grades]);

  const programOptions = [
    {
      name: 'Όλα τα Μαθήματα',
      value: 'all',
    },
    {
      name: 'Αυτοματισμού ΤΕΙ',
      value: 'auto',
    },
    {
      name: 'ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_63',
      value: 'idpe63',
    },
    {
      name: 'ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_54',
      value: 'idpe54',
    },
  ];
  const [coursesProgram, setProgramCourses] = useState(programOptions[0]);

  const selectProgramHandler = (event) => {
    const { value } = event.target;
    const optionIndex = programOptions.find((option) => option.value === value);
    setProgramCourses(optionIndex);
  };

  return (
    <div>
      <label htmlFor="filterProgram">Φιλτράρισμα Μαθημάτων</label> <br />
      <select onChange={selectProgramHandler}>
        {programOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <ProgramCourses
        title={coursesProgram.name}
        courses={coursesData}
        filterBy={
          coursesProgram.value !== 'all' ? coursesProgram.value : undefined
        }
        onChange={gradeChangeHandler}
        grades={grades}
      />
      {/* <Summary
        courses={coursesData}
        filterBy="idpe63"
        title="Περασμένα ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_64"
      />
      <Summary
        courses={coursesData}
        filterBy="idpe54"
        title="Περασμένα ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_54"
      /> */}
    </div>
  );
}

export default App;
