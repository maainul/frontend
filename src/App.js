import { Route, Routes } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Header from "./layouts/Header";
import Dashboard from "./pages/dashboard";
import Footer from "./layouts/Footer";
import NotFound from "./layouts/NotFound";
import { EmployeeRoutes } from "./features/employees/layout/Routes/EmployeeRoutes";
import DepartmentRoutes from "./features/department/layout/Routes/DepartmentRoutes";
import EmployeeList from "./features/employees/components/EmployeeList";
import CreateEmployee from "./pages/form/employee/CreateEmployee";
import GetEmployee from "./features/employees/components/GetEmployee";
import DepartmentList from "./features/department/components/DepartmentList";
import DepartmentForm from "./features/department/components/DepartmentForm";
import GetDepartment from "./features/department/components/GetDepartment";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route index element={<EmployeeList />} /> */}
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/create" element={<CreateEmployee />} />
        <Route path="/employees/:id" element={<GetEmployee />} />

        {/* ONLY EMPLOYEE ROUTE ; GO TO features/employees/layout/EmployeeRoute.js */}
        {/* <Route path="/employees/*" element={<EmployeeRoutes />}></Route> */}
        {/* ONLY DEPARTMENT ROUTE ; GO TO features/department/layout/DepartmentRoute.js */}
        {/* <Route path="/departments/*" element={<DepartmentRoutes />}></Route> */}
        {/* <Route index element={<DepartmentList />} /> */}
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/departments/create" element={<DepartmentForm />} />
        <Route path="/departments/:id" element={<GetDepartment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
