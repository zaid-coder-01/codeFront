import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [uname, setuname] = useState();
  const [mode, setmode] = useState(false);
  const [islog, setislog] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("users") != null) {
      const user = sessionStorage.getItem("users");
      const users = JSON.parse(user);
      setuname(users.uname);
     if(users.mode==='admin')
     {
       setmode(true)
     }
      setislog(true);
    }
  }, [islog, uname]);
  const logout = () => {
    sessionStorage.removeItem("users");
    setislog(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand bran aa" href="/">
            CodeSolution
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/designTemp">
                  Template
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/testapi">
                  Test Api
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Api">
                  APIs
                </a>
              </li>
              {islog ? (
                mode ?
                <li className="nav-item">
                  <a className="nav-link" href="/admin">
                    Dashboard
                  </a>
                </li>
              : <li className="nav-item">
                  <a className="nav-link" href="/setting">
                    setting
                  </a>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                {islog ? <a className="nav-link">{uname} </a> : ""}
              </li>
              <li className="nav-item">
                {islog ? (
                  <a className="nav-link btn btn-success ms-2" href="/" onClick={logout} style={{"color":'white',"width":"5rem"}}>
                    LOGOUT{" "}
                  </a>
                ) : (
                  <a className="nav-link btn btn-success ms-2" href="/login" style={{"color":'white',"width":"5rem"}}>
                    LOGIN
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
