import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    // const md=sessionStorage.getItem('theme')
    // document.body.className=md
  }, []);
  const history = useNavigate();
  const [User, setUser] = useState({
    uname: "",
    pass: "",
  });
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    setUser({ ...User, [name]: value });
  };
  const sub = (ev) => {
    ev.preventDefault();
    const form = {
      uname: User.uname,
      pass: User.pass,
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND}/login`, form)
      .then((res) => {
        if (res.data === "") {
          alert("enter valid data");
        } else {
          if (res.data.mode === "admin") {
            sessionStorage.setItem("users", JSON.stringify(res.data));
            history("/admin");
            history(0)
          } else {
            const users = {
              uname: res.data.uname,
              name: res.data.name,
              email: res.data.email,
              pass:res.data.pass
            };
            sessionStorage.setItem("users", JSON.stringify(users));
            history("/");
            history(0)
          }
        }
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
                  <h3>LOGIN</h3>
                </div>
                <div className="card-body">
                  <form>
                    <label>User Name</label>
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
                      className=" shadow-lg form-control"
                    ></input>
                    <div className="text-center mt-3">
                      <a href="/newuser">Create New</a>
                    </div>
                    <button
                      onClick={sub}
                      className="form-control btn btn-success mt-4 shadow-lg"
                    >
                      LOGIN
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

export default Login;
