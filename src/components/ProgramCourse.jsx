import React from 'react';
import Course from './Course';

const ProgramCourses = ({ courses, onChange, filterBy, grades }) => {
  const filteredCourses = filterBy
    ? courses.filter((course) => course.program === filterBy)
    : courses;

  const courseItems = filteredCourses.map((course) => (
    <Course
      key={course.id}
      {...course}
      courses={courses}
      onChange={onChange}
      grades={grades}
      filterBy={filterBy}
    />
  ));

  return (
    <table>
      <thead>
        <tr className="tableRow">
          <th>Κωδικός</th>
          <th>Τίτλος Μαθήματος</th>
          {filterBy === 'idpe54' && <th>Τύπος</th>}
          {filterBy === 'idpe54' && <th>Εξάμηνο</th>}
          {filterBy === 'idpe54' && <th>Αντιστοιχία Από</th>}
          {filterBy !== 'idpe54' && <th>Αντιστοιχία Σε</th>}
          <th>Βαθμός</th>
        </tr>
      </thead>
      <tbody>{courseItems}</tbody>
    </table>
  );
};

export default ProgramCourses;
