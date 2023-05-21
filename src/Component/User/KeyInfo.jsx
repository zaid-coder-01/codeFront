import React, { useEffect, useState } from "react";
import axios from "axios";
const KeyInfo = () => {
  const [uname, setuname] = useState();
  const [data, setdata] = useState([]);
  const [del, setdel] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("users") != null) {
      const user = sessionStorage.getItem("users");
      const users = JSON.parse(user);
      setuname(users.uname);
    }
    axios
      .post(process.env.REACT_APP_BACKEND + "/getinfo", { uname })
      .then((res) => {
        setdata(res.data);
      });
  }, [uname,del]);
  return (
    <>
      <h3 className="text-center mt-5 shadow-lg p-2">KEY DETAILS</h3>
        {data.map((data) => {
            let delname=data._id
          return (
            <div className="card mt-5 pt-1 form-control" key={data._id}>
            <div className="card-body mt-1">
              <div>
                Application Name: &nbsp; {data.AppName}
              </div>
              <div>Key: &nbsp; {data.Key}</div>
              <div className="pt-2" style={{color:'red',cursor:'pointer'}} onClick={()=>{
                    axios
                    .post(process.env.REACT_APP_BACKEND + "/delinfo", {delname})
                    .then((res) => {
                    alert(res.data);
                     setdel(true);
                    });  
              }}>Remove</div>
            </div>
            </div>
          );
        })}
    </>
  );
};

export default KeyInfo;
