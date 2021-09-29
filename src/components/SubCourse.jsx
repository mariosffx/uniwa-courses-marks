const SubCourse = ({ code, courses }) => {
  const course = courses.find((subCourse) => subCourse.id === code);

  if (!course) {
    return (
      <tr>
        <td>-</td>
      </tr>
    );
  }

  const { id, name, grade } = course;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{grade}</td>
    </tr>
  );
};

export default SubCourse;
