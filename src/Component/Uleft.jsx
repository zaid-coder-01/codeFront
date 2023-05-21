import React from "react";

const Uleft = ({ setCom, user }) => {
  return (
    <>
      <div className="">
        <div className="UserPic">
          <img src="default.png" className="pic" alt='profilepic'></img>
          <h6 className="ms-4 mt-2">{user}</h6>
        </div>
        <div className="adminNav">
          <ul>
            <li
              onClick={() => {
                setCom("keygen");
              }}
            >
              <i className="fa fa-key me-2" aria-hidden="true"></i>Generate Key
            </li>
            <li
              onClick={() => {
                setCom("KeyInfo");
              }}
            >
              <i className="fa fa-info me-2" aria-hidden="true"></i>Key Detail
            </li>
            <li
              onClick={() => {
                setCom("profile");
              }}
            >
              <i className="fa fa-user me-2" aria-hidden="true"></i>profile
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Uleft;
