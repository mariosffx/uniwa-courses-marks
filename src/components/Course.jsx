import { programMapping } from '../data/text';
import SubCourses from './SubCourses';

const Course = ({
  id = '',
  name = '',
  type = '-',
  semester = '-',
  program = '-',
  passesFrom = [],
  passes = [],
  grade = '-',
  courses,
  onChange,
}) => {
  const passesFromItems =
    passesFrom.length > 0 ? (
      <SubCourses codes={passesFrom} courses={courses} />
    ) : (
      '-'
    );
  const passesItems =
    passes.length > 0 ? <SubCourses codes={passes} courses={courses} /> : '-';

  const filteredCourses = courses.filter((course) =>
    passesFrom.includes(course.id)
  );

  const gradeCourses =
    filteredCourses.length > 0
      ? filteredCourses
          .filter((course) => course.grade > 0)
          .map((course) => course.grade)
      : [];

  const finalGrade =
    gradeCourses.length > 0 ? Math.max(...gradeCourses) : grade;

  const renderInput =
    program === 'idpe63' ? (
      <input
        className="gradeInput"
        name={id}
        onChange={onChange}
        value={finalGrade}
        type="number"
        min="0"
        max="10"
      />
    ) : (
      finalGrade
    );

  let dynamicGradeStyle = 'gradeCell';

  if (program === 'idpe63') {
    dynamicGradeStyle = 'gradeInput';
  }

  if (program !== 'idpe63' && finalGrade >= 5) {
    dynamicGradeStyle = 'passedGradeCell';
  }

  if (program !== 'idpe63' && finalGrade < 5) {
    dynamicGradeStyle = 'failedGradeCell';
  }
  
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{semester}</td>
      <td>{programMapping[program]}</td>
      <td className="subCoursesCell">{passesFromItems}</td>
      <td className="subCoursesCell">{passesItems}</td>
      <td className={dynamicGradeStyle}>{renderInput}</td>
    </tr>
  );
};

export default Course;
