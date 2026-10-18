function Welcome() {
  const students = ["Ayesha", "Shriya", "Asha", "Mannan", "Smit"];

  return (
    <div className="welcome">
      <h2>Welcome Students!</h2>

      <img
        src="https://i.pinimg.com/1200x/5a/68/f4/5a68f49e05cf9cbe97a769c73c8a9851.jpg"
        alt="Students"
      />

      <p><b>Institute:</b> Red & White</p>
      <p><b>Course:</b> Full Stack Development</p>
      <p><b>Date:</b> {new Date().toLocaleDateString("en-IN")}</p>

      <h3>Student Names</h3>

      <div className="students">
        {students.map((student, index) => (
          <p key={student}>
            {index + 1}. {student}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Welcome;