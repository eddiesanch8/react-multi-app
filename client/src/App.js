import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Counter, MovieApp, TaskApp, HomePage } from "./components/pages";
import "./css/app.css";
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counters" element={<Counter />} />
          <Route path="/movies" element={<MovieApp />} />
          <Route path="/tasks" element={<TaskApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
