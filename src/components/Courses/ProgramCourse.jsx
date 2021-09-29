import React from 'react';

const ProgramCourse = ({ title, children }) => {
  return (
    <details style={{ margin: 'auto', textAlign: 'center' }}>
      <summary>{title}</summary>
      {children}
    </details>
  );
};

export default ProgramCourse;
