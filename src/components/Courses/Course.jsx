const Course = ({
  name = '',
  id = '',
  grade = '',
  passes = [],
  exchangedFrom,
  onChange,
}) => {
  const passedCourses =
    passes.length > 0
      ? passes.map((code) => {
          const foundCourse = exchangedFrom.find(
            (course) => course.id === code
          );
          if (!foundCourse) {
            return 0;
          }
          return foundCourse;
        })
      : [];

  const passedGrades =
    passedCourses.length > 0 &&
    passedCourses
      .filter((course) => (course.grade > 0 ? true : false))
      .map((course) => course.grade);

  const finalGrade = passedGrades.length > 0 ? Math.max(...passedGrades) : '-';

  console.log(JSON.stringify(passedGrades));
  return (
    <tr>
      <td className="textCenter">{id}</td>
      <td className="textCenter">{name}</td>
      <td style={{ padding: 0 }}>
        {passedCourses.length === 0 && (
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Δεν βρέθηκαν μαθήματα αντιστοιχίας
          </div>
        )}
        {passedCourses.length > 0 &&
          passedCourses.map(
            ({ id: passedId, name: passedName, grade: passedGrade }) => (
              <div
                style={
                  passedCourses.length > 1
                    ? {
                        border: '1px solid black',
                        padding: 4,
                      }
                    : { padding: 4 }
                }
                key={id + passedName}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>{passedId}</span>
                  <span>{passedName}</span>
                  <span>{passedGrade}</span>
                </div>
              </div>
            )
          )}
      </td>
      <td className="textCenter">
        {onChange && (
          <input
            id={id}
            name={id}
            value={grade}
            onChange={onChange}
            type="number"
            min={0}
            max={10}
          />
        )}
        {!onChange && finalGrade}
      </td>
    </tr>
  );
};

export default Course;
