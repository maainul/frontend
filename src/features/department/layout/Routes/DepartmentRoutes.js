import React from "react";
import { Route, Routes } from "react-router-dom";
import DepartmentForm from "../../components/DepartmentForm";
import DepartmentList from "../../components/DepartmentList";
import GetDepartment from "../../components/GetDepartment";

export default function DepartmentRoutes() {
  return (
    <Routes>
      <Route index element={<DepartmentList />} />
      <Route path="create" element={<DepartmentForm />} />
      <Route path=":id" element={<GetDepartment />} />
    </Routes>
  );
}
