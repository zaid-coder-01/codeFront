import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Register = () => {
  useEffect(() => {
    // const md=sessionStorage.getItem('theme')
    // document.body.className=md
  }, []);
  const [User, setUser] = useState({
    name: "",
    uname: "",
    pass: "",
    email: "",
  });
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    setUser({ ...User, [name]: value });
  };
  const sub = (ev) => {
    ev.preventDefault();
    const form = {
      name: User.name,
      uname: User.uname,
      pass: User.pass,
      email: User.email,
      mode: "normal",
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/newUser`, form)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="login">
        <div className="container mt-5 child">
          <div className="row">
            <div className="col-md-7">
              <div
                className="card"
                style={{
                  "box-shadow":
                    "0 2px 4px 0 rgba(0, 0, 0, 0.2) inset, 0 4px 8px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div className="text-center mt-3">
                  <h3>CREATE NEW</h3>
                </div>
                <div className="card-body">
                  <form>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={getData}
                      value={User.name}
                      className="form-control shadow-lg"
                    ></input>
                    <label className="mt-2">User Name</label>
                    <input
                      type="text"
                      name="uname"
                      onChange={getData}
                      value={User.uname}
                      className="form-control shadow-lg"
                    ></input>
                    <label className="mt-2">Password</label>
                    <input
                      type="password"
                      name="pass"
                      onChange={getData}
                      value={User.pass}
                      className="form-control shadow-lg"
                    ></input>
                    <label className="mt-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={getData}
                      value={User.email}
                      className="form-control shadow-lg"
                    ></input>

                    <div className="text-center mt-3">
                      <a href="/login">Login</a>
                    </div>
                    <button
                      onClick={sub}
                      className="form-control btn btn-success mt-4 shadow-lg"
                    >
                      CREATE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
