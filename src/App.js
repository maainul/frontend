import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/dashboard";
import CreateEmployee from "./pages/form/employee/CreateEmployee";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateEmployee />} />
      </Routes>
      <Footer />
    </div>
  );
}
