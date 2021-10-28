import React from 'react';
import TableHeader from './TableHeader';
import Course from './Course';

const ProgramCourses = ({ title, headings, courses, onChange, filterBy }) => {
  const filteredCourses = filterBy
    ? courses.filter((course) => course.program === filterBy)
    : courses;

  const courseItems = filteredCourses.map((course) => (
    <Course key={course.id} {...course} courses={courses} onChange={onChange} />
  ));

  return (
    <details>
      <summary>{title}</summary>
      <table>
        <TableHeader headings={headings} />
        <tbody>{courseItems}</tbody>
      </table>
    </details>
  );
};

export default ProgramCourses;
