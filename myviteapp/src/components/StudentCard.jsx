function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Country: {props.country}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;