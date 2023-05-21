import React, { useState } from "react";

const DesignPage = () => {
  const [Ccolor, setCcolor] = useState("azure");
  const [Ffont, setFfont] = useState("18");
  const [Rrange, setRrange] = useState("0");
  const [Fcolor, setFcolor] = useState("black");
  const [Direction, setDirection] = useState("right");
  const [Lgfont, setLgfont] = useState("18");
  const [Height, setHeight] = useState("3");
  const [Border, setBorder] = useState("0");
  const [isCode, setisCode] = useState(false);
  const [type, settype] = useState("left");
  const [Ffamily, setFfamily] = useState("arial");
  const color = (ev) => {
    setCcolor(ev.target.style.backgroundColor);
  };
  const getFont = (ev) => {
    let val = ev.target.value;
    setFfont(val);
  };
  const getHeight = (ev) => {
    let val = ev.target.value;
    setHeight(val);
  };
  const getRange = (ev) => {
    let val = ev.target.value;
    setRrange(val);
  };
  const getFcolor = (ev) => {
    let val = ev.target.value;
    setFcolor(val);
  };
  const getDirection = (ev) => {
    let val = ev.target.value;
    setDirection(val);
  };
  const getLgfont = (ev) => {
    setLgfont(ev.target.value);
  };

  const getFamily = (ev) => {
    setFfamily(ev.target.value);
  };
  const getBorder = (ev) => {
    setBorder(ev.target.value);
  };
  return (
    <>
      <div className="dpage container-fluid m-2 p-2">
        <div className="row">
          <div className="col-md-6">
            <div className="colorpick mt-3">
              <div className="colorround shadow-lg">
                <div className="colordiv"></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "black" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "orange" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "chartreuse" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "lightgreen" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "green" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "blueviolet" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "skyblue" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "yellow" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "cornflowerblue" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "lightgray" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "gray" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "chocolate" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "aqua" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "pink" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "darkblue" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "azure" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "brown" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "white" }}
                ></div>
                <div
                  onClick={color}
                  className="colordiv"
                  style={{ backgroundColor: "bisque" }}
                ></div>
              </div>
              <div className="pb-5">
                <div className="mt-5 d-flex moreC ms-3">
                  <div>
                    <label className="mt-3"> More Color </label>
                    <input type="color" className="form-control"></input>
                  </div>
                  <div className="">
                    <label className="mt-3"> Nav Iteams Font Size </label>
                    <input
                      type="number"
                      className="form-control"
                      value={Ffont}
                      onChange={getFont}
                    ></input>
                  </div>
                </div>

                <div className="mt-3 d-flex moreC ms-3">
                  <div>
                    <label className="mt-2 d-block"> Border Radius </label>
                    <input
                      type="range"
                      className=""
                      min="0"
                      max="35"
                      onChange={getRange}
                      value={Rrange}
                    ></input>
                  </div>
                  <div className="">
                    <label className="mt-2"> Logo Font Size </label>
                    <input
                      type="number"
                      className="form-control"
                      value={Lgfont}
                      onChange={getLgfont}
                    ></input>
                  </div>
                </div>

                <div className="mt-3 d-flex moreC ms-3">
                  <div className="">
                    <label className="mt-2">Font Family </label>
                    <select
                      className="form-control"
                      onChange={getFamily}
                      value={Ffamily}
                    >
                      <option value="Arial">Arial</option>
                      <option value="Algerian">Algerian</option>
                      <option value="">Arial</option>
                    </select>
                  </div>
                  <div>
                    <label className="mt-2 d-block"> Font Color</label>
                    <input
                      type="color"
                      className="form-control"
                      onChange={getFcolor}
                      value={Fcolor}
                    ></input>
                  </div>
                </div>

                <div className="mt-3 d-flex moreC ms-3">
                  <div className="">
                    <label className="mt-2">Nav Iteams Positions </label>
                    <select
                      className="form-control"
                      onChange={getDirection}
                      value={Direction}
                    >
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="center">Center</option>
                    </select>
                  </div>
                  <div>
                    <label className="mt-2 d-block"> border</label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      onChange={getBorder}
                      value={Border}
                      className=""
                    ></input>
                  </div>
                </div>

                <div className="mt-3 d-flex moreC ms-3">
                  <div className="">
                    <label className="mt-2">Navbar Height </label>
                    <input
                      type="number"
                      className="form-control"
                      value={Height}
                      onChange={getHeight}
                    ></input>
                  </div>
                  <div>
                    <label className="mt-2 d-block">Navbar Type</label>
                    <select className="form-control">
                      <option value="none">Vertical</option>
                      <option value="right">Horizontal</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 cod" style={{ overflowY: "scroll" }}>
            <div
              style={{
                width: "95%",
                height: Height + "rem",
                backgroundColor: Ccolor,
                borderRadius: Rrange + "px",
                border: Border + "px solid black",
              }}
              className="ms-3 dnavitem"
            >
              <ul>
                <li
                  style={{
                    float: "left",
                    paddingRight: "2rem",
                    fontSize: Lgfont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                  }}
                  className="mt-3"
                >
                  LOGO
                </li>
                <li
                  style={{
                    float: Direction,
                    paddingRight: "2rem",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                  }}
                  className="mt-3"
                >
                  Login
                </li>
                <li
                  style={{
                    float: Direction,
                    paddingRight: "2rem",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                  }}
                  className="mt-3"
                >
                  create
                </li>
                <li
                  style={{
                    float: Direction,
                    paddingRight: "2rem",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                  }}
                  className="mt-3"
                >
                  Home
                </li>
              </ul>
            </div>

            <div className="mt-5 text-center">
              <button
                className="btn btn-success"
                onClick={() => {
                  setisCode(true);
                }}
              >
                Generate Code
              </button>
            </div>
            {isCode ? (
              <div className="code">
                <div className="row mt-5">
                  <div className="col-md-6" style={{ border: "none" }}>
                    <div className="card" style={{ height: "60vh" }}>
                      <h5 className="text-center mt-2">CSS CODE</h5>
                      <pre>
                        <p>
                          {`
    .nav{
    width: 100%; height:${Height}rem;
    background-color: ${Ccolor};
    border-radius: ${Rrange + "px"};
    }
    .nav ul li{
    list-style:none;
    float: ${Direction}; padding-right: 2rem; 
    font-size: ${Ffont + "px"}; color: ${Fcolor}; 
    font-family: ${Ffamily};
    text-align:center;
    padding-top: 1rem;
    }
    .nav .logo{
    float: left; padding-right: 2rem; 
    font-size: ${Lgfont + "px"};
    color: ${Fcolor};font-family: ${Ffamily};
    }
                                                                `}
                        </p>
                      </pre>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card" style={{ height: "60vh" }}>
                      <h5 className="text-center mt-2">HTML CODE</h5>
                      <pre>
                        <p>{`    
  
    <div class="nav">
    <ul>
        <li class="logo">LOGO</li>
        <li>Login</li>
        <li>create</li>
        <li>Home</li>
    </ul>
    </div>   `}</p>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
