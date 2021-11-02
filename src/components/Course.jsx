import SubCourses from './SubCourses';

const Course = ({
  id = '',
  name = '',
  type = '-',
  semester = '-',
  program = '-',
  passesFrom = [],
  passes = [],
  courses,
  onChange,
  grades,
  filterBy,
}) => {
  const grade = grades[id];

  const passesFromItems =
    passesFrom.length > 0 ? (
      <SubCourses codes={passesFrom} courses={courses} grades={grades} />
    ) : (
      '-'
    );
  const passesItems =
    passes.length > 0 ? (
      <SubCourses codes={passes} courses={courses} grades={grades} />
    ) : (
      '-'
    );

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
    program !== 'idpe54' ? (
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
      {filterBy === 'idpe54' && <td>{type}</td>}
      {filterBy === 'idpe54' && <td>{semester}</td>}
      {filterBy === 'idpe54' && (
        <td className="subCoursesCell">{passesFromItems}</td>
      )}
      {filterBy !== 'idpe54' && (
        <td className="subCoursesCell">{passesItems}</td>
      )}
      <td
        className={program === 'idpe63' ? dynamicInputStyle : dynamicGradeStyle}
      >
        {renderInput}
      </td>
    </tr>
  );
};

export default Course;
