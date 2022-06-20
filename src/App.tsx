import React from "react";
import { Header, Footer } from "./components";
import { CreateEmployee, EmployeeList, NotFound } from "./views";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
