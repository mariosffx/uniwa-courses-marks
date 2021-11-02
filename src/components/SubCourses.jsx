import React from 'react';
import SubCourse from './SubCourse';

const SubCourses = ({ courses, codes, grades }) => {
  const courseItems = codes.map((code) => (
    <SubCourse key={code} code={code} courses={courses} grades={grades} />
  ));

  return (
    <table className="subCourses">
      <tbody>{courseItems}</tbody>
    </table>
  );
};

export default SubCourses;
