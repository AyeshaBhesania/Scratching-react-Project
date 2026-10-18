import StudentCard from "./studentcard";

function Students() {
  return (
    <div>
      <h1>Student Details</h1>

      <StudentCard
        name="Ayesha"
        city="Surat"
        state="Gujarat"
        country="India"
        course="Full Stack Development"
      />

      <StudentCard
        name="Shriya"
        city="olpad"
        state="Gujarat"
        country="India"
        course="Web Development"
      />

      <StudentCard
        name="Asha"
        city="Surat"
        state="Gujarat"
        country="India"
        course="Full Stack Development"
      />

      <StudentCard
        name="Mannan"
        city="Surat"
        state="Gujarat"
        country="India"
        course="Full Stack Development"
      />

      <StudentCard
        name="Smit"
        city="Surat"
        state="Rajasthan"
        country="India"
        course="Full Stack Development"
      />
    </div>
  );
}

export default Students;