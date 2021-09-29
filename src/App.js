import { useState } from 'react';
import Courses from './components/Courses/Courses';
import oldIdpe from './data/oldIdpe';
import newIdpe from './data/newIdpe';
import './App.css';
import ProgramCourse from './components/Courses/ProgramCourse';

function App() {
  const [oldProgram, setOldProgram] = useState([...oldIdpe]);
  const [newProgram, setNewProgram] = useState(newIdpe);

  const oldProgramCourseHandler = (event) => {
    const { name, value } = event.target;
    const editedOldProgram = [...oldProgram];
    const index = editedOldProgram.findIndex((course) => course.id === name);
    editedOldProgram[index].grade = value;
    setOldProgram(editedOldProgram);
  };

  return (
    <div>
      <ProgramCourse title="Παλιό Πρόγραμμα Σπουδών">
        <Courses
          renderCourses={oldProgram}
          exchangedFrom={newProgram}
          onChange={oldProgramCourseHandler}
          phrase="Αντιστοίχηση Σε"
        />
      </ProgramCourse>
      <ProgramCourse title="Νέο Πρόγραμμα Σπουδών">
        <Courses
          renderCourses={newProgram}
          exchangedFrom={oldProgram}
          phrase="Αντιστοίχηση Από"
        />
      </ProgramCourse>
    </div>
  );
}

export default App;
