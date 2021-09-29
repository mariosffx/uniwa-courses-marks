import './App.css';
import { useState, useEffect } from 'react';
import { tableHeadings } from './data/text';
import coursesData from './data/courses/coursesData';
import Course from './components/Course';
import TableHeader from './components/TableHeader';
import getLocalStorageOrDefault from './hooks/getLocalStorageOrDefault';

function App() {
  const [courses, setCourses] = useState(
    getLocalStorageOrDefault('courses', coursesData)
  );

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const courseGradeChangeHandler = (event) => {
    const { name, value } = event.target;
    const editedCourses = [...courses];
    const index = editedCourses.findIndex((course) => course.id === name);
    editedCourses[index].grade = Number(value);
    setCourses(() => editedCourses);
  };

  const courseItems = courses.map((course) => (
    <Course
      key={course.id}
      {...course}
      courses={courses}
      onChange={courseGradeChangeHandler}
    />
  ));

  return (
    <table>
      <TableHeader headings={tableHeadings} />
      <tbody>{courseItems}</tbody>
    </table>
  );
}

export default App;
