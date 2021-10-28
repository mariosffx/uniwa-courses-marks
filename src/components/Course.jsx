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

  let dynamicGradeStyle = 'gradeCell';

  if (program === 'idpe54' && grade >= 5) {
    dynamicGradeStyle = 'passedGradeCell';
  }

  if (program === 'idpe54' && grade < 5) {
    dynamicGradeStyle = 'failedGradeCell';
  }
  if (program === 'idpe54' && !grade) {
    dynamicGradeStyle = 'noGradeCell';
  }

  let dynamicInputStyle = '';
  if (program !== 'idpe54') {
    dynamicInputStyle = 'inputCell';
  }

  const renderInput =
    program === 'idpe63' ? (
      <input
        className="gradeInput"
        name={id}
        onChange={onChange}
        value={grade}
        type="number"
        min="0"
        max="10"
        step="0.1"
      />
    ) : (
      grade
    );

  return (
    <tr className={`tableRow ${dynamicGradeStyle}`}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{semester}</td>
      <td>{programMapping[program]}</td>
      <td className="subCoursesCell">{passesFromItems}</td>
      <td className="subCoursesCell">{passesItems}</td>
      <td
        className={program === 'idpe63' ? dynamicInputStyle : dynamicGradeStyle}
      >
        {renderInput}
      </td>
    </tr>
  );
};

export default Course;
