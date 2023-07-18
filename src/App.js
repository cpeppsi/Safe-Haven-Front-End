import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Pet from "./Components/Pet";
import New from "./Components/New";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/:id" element={<Pet />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
