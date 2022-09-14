import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useRoutes, Outlet, Navigate, useNavigate } from "react-router-dom";
import InstructorScreen from "./page/InstructorScreen";
import TraineeScreen from "./page/TraineeScreen";
import Login from "./page/Login";
import { AuthContext } from "./Context/AuthContext";
import RequireAuth from "./routes/RequireAuth";
import Signup from "./page/Signup";



function App() {
  const [ResAccessTokenAndRole, SetResAccessTokenAndRole] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          ResAccessTokenAndRole,
          SetResAccessTokenAndRole
        }}>
        <BrowserRouter>
          <Routes>
            <Route element={<RequireAuth  />}>
              <Route element={<TraineeScreen />} path="/Trainee" exact ></Route>
              <Route element={<InstructorScreen />} path="/Technician" exact ></Route>
              <Route element={<Signup />} path="/signup" exact ></Route>
            </Route>
            <Route element={<Login />} path="/Login" ></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}
export default App;