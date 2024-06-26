import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
