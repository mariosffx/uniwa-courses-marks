import Semester from './Semester';

const Courses = ({ renderCourses, exchangedFrom, onChange, phrase }) => {
  const semesters = [];

  renderCourses.forEach((course) => {
    if (!semesters[course.semester - 1]) {
      semesters[course.semester - 1] = [];
    }
    semesters[course.semester - 1].push(course);
  });

  const semesterItems = semesters.map((semester, index) => (
    <Semester
      key={index}
      semester={index + 1}
      courses={semester}
      exchangedFrom={exchangedFrom}
      onChange={onChange}
      phrase={phrase}
    />
  ));

  return <div className="courses">{semesterItems}</div>;
};

export default Courses;
