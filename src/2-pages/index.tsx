import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";


const TestPage = lazy(() => import("./test"));


export const Routing: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TestPage/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
