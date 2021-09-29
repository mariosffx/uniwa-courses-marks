import React from 'react';
import SubCourse from './SubCourse';

const SubCourses = ({ courses, codes }) => {
  const courseItems = codes.map((code) => (
    <SubCourse key={code} code={code} courses={courses} />
  ));

  return (
    <table className="subCourses">
      <tbody>{courseItems}</tbody>
    </table>
  );
};

export default SubCourses;
