import React from 'react';
import { Header, Footer } from './components';
import {CreateEmployee, EmployeeDirectory} from "./views";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employees" element={<EmployeeDirectory />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
