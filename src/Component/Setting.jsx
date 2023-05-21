import React, { useState, useEffect } from "react";
import Profile from "./AdminComp/Profile";
import Uleft from "./Uleft";
import Keygen from "./User/Keygen";
import KeyInfo from "./User/KeyInfo";

const Setting = () => {
  const [uname, setuname] = useState(false);
  const [com, setCom] = useState("keygen");
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
          <div className="col-md-2 setleft shadow-lg mt-3">
            <Uleft user={uname} setCom={setCom}></Uleft>
          </div>
          <div className="col-md-10">
            <div className="logins">
              <div className="container mt-5 keygen">
                <div className="row">
                  <div className="col-md-9">
                   {com==='keygen' &&  <Keygen uname={{uname}}></Keygen>}
                   {com==='profile' && <Profile></Profile>}
                   {com==='KeyInfo' && <KeyInfo></KeyInfo>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
