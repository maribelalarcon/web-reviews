import { Routes, Route } from "react-roter";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Reviews" element={<Reviews />} />
    </Routes>
  );
}

export default App;
