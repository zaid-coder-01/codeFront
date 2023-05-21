import React, { useState } from "react";

const Searchbar = () => {
  const [Ccolor, setCcolor] = useState("red");
  const [Ffont, setFfont] = useState("18");
  const [Rrange, setRrange] = useState("0");
  const [Fcolor, setFcolor] = useState("black");
  const [BWidth, setBWidth] = useState("8");
  const [FWidth, setFWidth] = useState("18");
  const [Width, setWidth] = useState("7");
  const [Border, setBorder] = useState("0");
  const [Bpadding, setBpadding] = useState("3");
  const [isCode, setisCode] = useState(false);
  const [Ffamily, setFfamily] = useState("arial");
  const color = (ev) => {
    setCcolor(ev.target.style.backgroundColor);
  };
  const getFont = (ev) => {
    let val = ev.target.value;
    setFfont(val);
  };
  const getRange = (ev) => {
    let val = ev.target.value;
    setRrange(val);
  };
  const getFcolor = (ev) => {
    let val = ev.target.value;
    setFcolor(val);
  };
  const getFamily = (ev) => {
    setFfamily(ev.target.value);
  };
  const getBorder = (ev) => {
    setBorder(ev.target.value);
  };
  const getWidth = (ev) => {
    setBWidth(ev.target.value);
  };
  const getFWidth = (ev) => {
    setFWidth(ev.target.value);
  };
  const getpadding = (ev) => {
    setBpadding(ev.target.value);
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
                    <input
                      type="color"
                      className="form-control"
                      value="#72dafd"
                    ></input>
                  </div>
                  <div className="">
                    <label className="mt-3"> Font Size </label>
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
                    <label className="mt-2"> Padding </label>
                    <input
                      type="number"
                      className="form-control"
                      value={Bpadding}
                      onChange={getpadding}
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
                    <label className="mt-2">Button Width</label>
                    <input
                      type="number"
                      className="form-control"
                      value={BWidth}
                      onChange={getWidth}
                    ></input>
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
                  <div>
                    <label className="mt-2 d-block">Field Width</label>
                    <input
                      type="number"
                      className="form-control"
                      value={FWidth}
                      onChange={getFWidth}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container text-center mt-5">
              <div>
                <input
                  type="text"
                  style={{
                    width: FWidth + "rem",
                    padding: Bpadding + "px",
                    borderRadius: Rrange + "px",
                    fontSize: Ffont + "px",
                  }}
                ></input>
                <button
                  type="submit"
                  style={{
                    width: BWidth + "rem",
                    padding: Bpadding + "px",
                    borderRadius: Rrange + "px",
                    fontSize: Ffont + "px",
                    backgroundColor: Ccolor,
                    color: Fcolor
                  }}
                >
                  Search
                </button>
              </div>
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
.btn{
  width: ${BWidth}rem;
  padding: ${Bpadding}px;
  border-radius: ${Rrange}px;
  font-size: ${Ffont}px;
  background-color:${Ccolor};
  color:${Fcolor};
    }
.searchfield{
  width: ${FWidth}rem;
  padding: ${Bpadding}px;
  border-radius: ${Rrange}px;
  font-size: ${Ffont}px;
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
                                 
    <div>
      <input type="text" class='searchfield'></input>
      <button type="submit" class='btn'>
        Search
      </button>
    </div> `}</p>
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

export default Searchbar;
