import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [User, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    uname: "",
  });
  useEffect(() => {
    if (sessionStorage.getItem("users") != null) {
      const loguser = sessionStorage.getItem("users");
      const username = JSON.parse(loguser);
      setUser(username);
    }
  }, []);
  const [isshow, setisshow] = useState(false);
  const [isedit, setisedit] = useState(false);
  function han(event) {
    setisedit(true);
    setisshow(true);
       const table = document.querySelectorAll("table");
       table[0].style.border='2px solid blue'
      }
  const hand = () => {
    const tableRows = document.querySelectorAll("table tbody tr");
    const tableData = [];

    tableRows.forEach((row) => {
      const rowData = [];
      row.querySelectorAll("td").forEach((cell) => {
        rowData.push(cell.textContent);
      });
      tableData.push(rowData);
    });
    console.log(tableData)
    const form = {
      name: tableData[0][0],
      uname: tableData[1][0],
      pass: tableData[3][0],
      email: tableData[2][0],
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/updateUser`, form)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setisedit(false);
    setisshow(false);
    const table = document.querySelectorAll("table");
    table[0].style.border=''
  };
  return (
    <>
      <h3 className="text-center mt-1 shadow-lg p-2">PROFILE</h3>
      <div className="UserPic text-center mt-5 pt-2">
        <img className="pic" src="default.png" alt="userpic"></img>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-5 pt-3">
          <div className="d-flex justify-content-end">
            <div className="mb-2"><button className="btn btn-success" onClick={han}>EDIT</button></div>
            {isshow? <div className="ms-4 mb-2">
            <div><button className="btn btn-success" onClick={hand}>SUBMIT</button></div>
            </div> : ''}
          </div>
          <table class="table table-striped bg-white table-hover table-bordered shadow-lg">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td contentEditable={isedit}>{User.name}</td>
              </tr>
              <tr>
                <th scope="row">User Name</th>
                <td>{User.uname}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td contentEditable={isedit}>{User.email}</td>
              </tr>
              <tr>
                <th scope="row">Password</th>
                <td contentEditable={isedit}>{User.pass}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
