import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./login/Login";
import Home from "./Home";
import CreateUser from "./users/CreateUser";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App ">
      {location.pathname !== "/" && <Sidebar />}
      {/* <Link to={/Home}>home</Link> */}
      <div className="bg-light">
        <Link to="/home" className="mx-1">
          Name
        </Link>
        <Link to="/create-user">Form</Link>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
