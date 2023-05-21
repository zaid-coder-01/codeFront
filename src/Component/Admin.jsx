import React, { useState, useEffect } from "react";
import AddApi from "./AdminComp/AddApi";
import AddapiData from "./AdminComp/AddapiData";
import Dashboard from "./AdminComp/Dashboard";
import Profile from "./AdminComp/Profile";
import Users from "./AdminComp/Users";
import SetLeft from "./SetLeft";

const Admin = () => {
  const [comp, setCom] = useState("dashboard");
  const [uname, setuname] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("users") != null) {
      const user = sessionStorage.getItem("users");
      const users = JSON.parse(user);
      setuname(users.uname);
    }
  }, []);

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-2 setleft">
            <SetLeft setCom={setCom} user={uname}></SetLeft>
          </div>
          <div className="col-md-10">
            {comp === "dashboard" && <Dashboard></Dashboard>}
            {comp === "profile" && <Profile></Profile>}
            {comp === "api" && <AddApi></AddApi>}
            {comp === "users" && <AddapiData></AddapiData>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
