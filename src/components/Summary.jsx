import React from 'react';

const Summary = ({ courses, filterBy, title }) => {
  const filterCourses = (course) =>
    course.grade >= 5 && course.program === filterBy;
  const summaryPassedCourses = courses.filter(filterCourses);
  return (
    <div>
      {title}: {summaryPassedCourses.length}
    </div>
  );
};

export default Summary;
