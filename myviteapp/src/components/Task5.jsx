
import { useState } from "react";
import "../App.css";

function Task5() {
 
  const [name, setName] = useState("Ayesha");

 
  const [count, setCount] = useState(0);

 
  const [isStudent, setIsStudent] = useState(false);

  const [fruits, setFruits] = useState(["Apple", "Mango"]);


  const [student, setStudent] = useState({
    name: "Ayesha",
    age: 20
  });

  return (
    <div className="container">
      <h1>useState Examples</h1>

      <div className="box">
        <h2>1. String</h2>
        <p>Name: {name}</p>
        <button onClick={() => setName("Ayesha Bhesania")}>
          Add/Update Data
        </button>
        <button onClick={() => setName("Ayesha")}>
          Reset Data
        </button>
      </div>

      <div className="box">
        <h2>2. Number</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Add/Update Data
        </button>
        <button onClick={() => setCount(0)}>
          Reset Data
        </button>
      </div>

      <div className="box">
        <h2>3. Boolean</h2>
        <p>Is Student: {isStudent ? "Yes" : "No"}</p>
        <button onClick={() => setIsStudent(true)}>
          Add/Update Data
        </button>
        <button onClick={() => setIsStudent(false)}>
          Reset Data
        </button>
      </div>

      <div className="box">
        <h2>4. Array</h2>
        <p>Fruits: {fruits.join(", ")}</p>
        <button onClick={() => setFruits([...fruits, "Orange"])}>
          Add/Update Data
        </button>
        <button onClick={() => setFruits(["Apple", "Mango"])}>
          Reset Data
        </button>
      </div>

      <div className="box">
        <h2>5. Object</h2>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <button
          onClick={() =>
            setStudent({ ...student, age: student.age + 1 })
          }
        >
          Add/Update Data
        </button>
        <button
          onClick={() => setStudent({ name: "Ayesha", age: 20 })}
        >
          Reset Data
        </button>
      </div>
    </div>
  );
}

export default Task5;
