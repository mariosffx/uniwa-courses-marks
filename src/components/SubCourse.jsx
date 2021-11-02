const SubCourse = ({ code, courses, grades }) => {
  const course = courses.find((subCourse) => subCourse.id === code);

  if (!course) {
    return (
      <tr>
        <td>-</td>
      </tr>
    );
  }

  const { id, name } = course;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{grades[id]}</td>
    </tr>
  );
};

export default SubCourse;
