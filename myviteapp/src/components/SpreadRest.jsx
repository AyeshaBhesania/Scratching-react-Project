function SpreadRest() {

  const fruits1 = ["Apple", "Mango"];
  const fruits2 = ["Banana", "Orange"];
  const mergedArray = [...fruits1, ...fruits2];

  
  const student = { name: "Ayesha", age: 20 };
  const course = { course: "Full Stack", institute: "Red & White" };
  const mergedObject = { ...student, ...course };

 
  const copiedObject = { ...student };

 
  function calculateSum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }

  return (
    <div className="spread-rest">
      <h1>Rest & Spread Operator</h1>

      <section>
        <h2>1. Merge Two Arrays</h2>
        <p>{JSON.stringify(mergedArray)}</p>
      </section>

      <section>
        <h2>2. Merge Two Objects</h2>
        <p>{JSON.stringify(mergedObject)}</p>
      </section>

      <section>
        <h2>3. Copy an Object</h2>
        <p>{JSON.stringify(copiedObject)}</p>
      </section>

      <section>
        <h2>4. Rest Operator</h2>
        <p>Sum of 10, 20, 30 = {calculateSum(10, 20, 30)}</p>
      </section>
    </div>
  );
}

export default SpreadRest;