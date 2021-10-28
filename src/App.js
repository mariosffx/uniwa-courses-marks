import './App.css';
import { useState, useEffect } from 'react';
import { tableHeadings } from './data/text';
import coursesData from './data/courses/coursesData';
import getLocalStorageOrDefault from './hooks/getLocalStorageOrDefault';
import ProgramCourses from './components/ProgramCourse';
import Summary from './components/Summary';

function App() {
  const [courses, setCourses] = useState(
    getLocalStorageOrDefault('courses', coursesData)
  );

  const courseGradeChangeHandler = (event) => {
    const { name: id, value: grade } = event.target;
    if (grade > 10) {
      return;
    }

    const editedCourses = [...courses];
    const index = editedCourses.findIndex((course) => course.id === id);
    editedCourses[index].grade = Number(grade);

    editedCourses.forEach((course) => {
      if (course.passesFrom) {
        const passedFromGrades = [];
        course.passesFrom.forEach((passedFromId) => {
          const passesFromCourseIndex = editedCourses.findIndex(
            (editedCourse) => editedCourse.id === passedFromId
          );
          const passesFromCourse = editedCourses[passesFromCourseIndex];
          if (passesFromCourse.grade && passesFromCourse.grade > 0) {
            passedFromGrades.push(passesFromCourse.grade);
          }
        });
        const maxGrade =
          passedFromGrades.length > 0 ? Math.max(...passedFromGrades) : 0;
        course.grade = maxGrade;
      }
    });
    setCourses(() => editedCourses);
  };

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  return (
    <div>
      <ProgramCourses
        title="ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_63"
        headings={tableHeadings}
        courses={courses}
        filterBy="idpe63"
        onChange={courseGradeChangeHandler}
      />
      <ProgramCourses
        title="ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_54"
        headings={tableHeadings}
        courses={courses}
        filterBy="idpe54"
        onChange={courseGradeChangeHandler}
      />
      <ProgramCourses
        title="Όλα τα Μαθήματα"
        headings={tableHeadings}
        courses={courses}
        filterBy={null}
        onChange={courseGradeChangeHandler}
      />
      <Summary
        courses={courses}
        filterBy="idpe63"
        title="Περασμένα ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_64"
      />
      <Summary
        courses={courses}
        filterBy="idpe54"
        title="Περασμένα ΜΑΘΗΜΑΤΑ 5ΕΤΟΥΣ ΠΠΣ ΠΑΔΑ_54"
      />
    </div>
  );
}

export default App;
