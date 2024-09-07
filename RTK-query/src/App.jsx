import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
