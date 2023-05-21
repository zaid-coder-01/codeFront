import React from "react";

const SetLeft = ({ setCom, user }) => {
  return (
    <>
      <div className="">
        <div className="UserPic">
          <img className="pic" src="default.png" alt="userpic"></img>
          <h6 className="ms-4 mt-2">{user}</h6>
        </div>
        <div className="adminNav">
          <ul>
            <li
              className="lk"
              onClick={(ev) => {
                setCom("profile");
              }}
            >
              <i className="fa fa-user me-2" aria-hidden="true"></i>Profile
            </li>
            <li
              className="lk"
              onClick={(ev) => {
                setCom("users");
              }}
            >
              <i className="fa fa-database me-2" aria-hidden="true"></i>Api Data
            </li>
            <li
              className="lk"
              onClick={(ev) => {
                setCom("dashboard");
              }}
            >
              <i className="fa fa-bar-chart me-2"></i>Dashboard
            </li>
            <li
              className="lk"
              onClick={(ev) => {
                setCom("api");
              }}
            >
              <i className="fa fa-globe me-2" aria-hidden="true"></i>Api
              Category
            </li>
            <li
              className="lk"
              onClick={(ev) => {
                setCom("api");
              }}
            >
              <i className="fa fa-key me-2" aria-hidden="true"></i>Manage Key
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SetLeft;
