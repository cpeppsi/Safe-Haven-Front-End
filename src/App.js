import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Pet from "./Components/Pet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/:id" element={<Pet />} />
      </Routes>
    </Router>
  )
}

export default App;
