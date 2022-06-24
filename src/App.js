import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DrawerLayout from "./Components/Drawer/DrawerLayout";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DrawerLayout />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
