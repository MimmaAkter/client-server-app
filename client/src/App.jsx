import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/add" element={<AddUser></AddUser>} />
          <Route path="/edit/:id" element={<EditUser></EditUser>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;