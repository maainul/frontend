import { Route, Routes } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Header from "./layouts/Header";
import Dashboard from "./pages/dashboard";
import Footer from "./layouts/Footer";
import NotFound from "./layouts/NotFound";
import { EmployeeRoute } from "./features/employees/layout/Routes/EmployeeRoute";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* ONLY EMPLOYEE ROUTE ; GO TO features/employees/layout/EmployeeRoute.js */}
        <Route path="/employees/*" element={<EmployeeRoute />}></Route> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
