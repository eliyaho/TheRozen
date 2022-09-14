import React, { useContext } from "react";
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";

 function RequireAuth() {
    let Location = useLocation();
    const { ResAccessTokenAndRole, SetResAccessTokenAndRole} = useContext(AuthContext);
    console.log("RequireAuth");
    console.log("role",ResAccessTokenAndRole);
    return (
        ResAccessTokenAndRole  ?<Outlet/> : <Navigate to="/Login" state={{ from: Location }} />
    )

}

export default RequireAuth ;