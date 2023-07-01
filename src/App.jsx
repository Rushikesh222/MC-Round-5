import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./files/Page/Home";
import { Detial } from "./files/Components/Details";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Detial />} />
      </Routes>
    </div>
  );
}

export default App;
