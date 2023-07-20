import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./Components/Navbar";
import Home from "./Components/Home";
import Pet from "./Components/Pet";
import New from "./Components/New";
import UpdatePet from "./Components/UpdatePet";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets/:id" element={<Pet />} />
          <Route path="/pet/update/:id" element={<UpdatePet />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
