import React from "react";
import { Header, Footer } from "./components";
import { CreateEmployee, EmployeeList } from "./views";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
