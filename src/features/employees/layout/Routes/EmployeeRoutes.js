import { Route, Routes } from "react-router-dom";
import EmployeeList from "../../components/EmployeeList";
import GetEmployee from "../../components/GetEmployee";
import CreateEmployee from "../../../../pages/form/employee/CreateEmployee";
export function EmployeeRoutes() {
  return (
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route path="create" element={<CreateEmployee />} />
      <Route path=":id" element={<GetEmployee />} />
    </Routes>
  );
}
