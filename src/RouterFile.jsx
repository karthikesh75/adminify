import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import AdminBookPage from "./AdminBookPage";
import EmployeeBooksPage from "./EmployeeBooksPage";
import HistoryFile from "./HistoryFile";

const RouterFile = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminbookpage" element={<AdminBookPage />} />
          <Route path="/employeebookspage" element={< EmployeeBooksPage/>} 
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/HistoryPage" element={<HistoryFile />} />

          {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterFile;
