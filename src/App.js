import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Destination, Crew, Tech } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
