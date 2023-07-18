import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Pet from "./Components/Pet";
import New from "./Components/New";
import UpdatePet from "./Components/UpdatePet";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Pet />} />
          <Route path="/pet/update/:id" element={<UpdatePet />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
