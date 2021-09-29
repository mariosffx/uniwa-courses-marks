import Course from './Course';

const Semester = ({ semester, courses, exchangedFrom, onChange, phrase }) => {
  const courseItems = courses.map((course) => (
    <Course
      key={course.id}
      {...course}
      exchangedFrom={exchangedFrom}
      onChange={onChange}
    />
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            className="semesterHeading"
            colSpan="4"
          >{`${semester}ο ΕΞΑΜΗΝΟ`}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="textCenter">Κωδικός</th>
          <th className="textCenter">Τίτλος Μαθήματος</th>
          <th>{phrase}</th>
          <th className="textCenter">Βαθμός</th>
        </tr>
      </tbody>
      {courseItems}
    </table>
  );
};

export default Semester;
