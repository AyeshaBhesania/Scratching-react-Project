
import { useState, useEffect } from "react";
import "../App.css";

function StudentManager() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addStudent() {
    if (name.trim() === "") {
      alert("Please enter student name");
      return;
    }

    setStudents([...students, name.trim()]);
    setName("");
  }

  function deleteStudent(index) {
    setStudents(students.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>Student Information Manager</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student}
              <button onClick={() => deleteStudent(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentManager;
