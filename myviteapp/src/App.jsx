import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import SpreadRest from "./components/SpreadRest";
import Students from "./components/Students";
import Task5 from "./components/Task5";
import StudentManager from "./components/StudentManager";

function App() {
  return (
    <div>

      <Header />
      <Welcome />
      <Footer />

      <hr />

      <SpreadRest />

      <hr />

      <Students />

      <hr />

      <Task5 />

      <hr />

      <StudentManager />      
    </div>
  );
}

export default App;

