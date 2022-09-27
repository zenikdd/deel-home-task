import './App.scss';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Contracts} from "./components/Contracts/Contracts";
import {UnpaidJobs} from "./components/Jobs/UnpaidJobs";
import React from "react";

function App() {
  return (
      <div className="App">
      <Header />
          <Routes>
              <Route path="/" element={<Navigate to="/contracts" replace/>}/>
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/jobs/unpaid" element={<UnpaidJobs />} />
          </Routes>
      </div>
  );
}

export default App;
