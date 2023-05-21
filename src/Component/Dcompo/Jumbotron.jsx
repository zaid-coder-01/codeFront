import React, { useState } from "react";

const Jumbotron = () => {
  const [Ccolor, setCcolor] = useState("red");
  const [Ffont, setFfont] = useState("18");
  const [Height, setHeight] = useState(15);
  const [Fcolor, setFcolor] = useState("black");
  const [BWidth, setBWidth] = useState("100");
  const [Border, setBorder] = useState("0");
  const [Bpadding, setBpadding] = useState("0");
  const [isCode, setisCode] = useState(false);
  const [Text, setText] = useState("Edit your text");
  const [Ffamily, setFfamily] = useState("arial");
  const color = (ev) => {
    setCcolor(ev.target.style.backgroundColor);
  };
  const getText = (ev) => {
    setText(ev.target.innerHTML);
  };
  const getFont = (ev) => {
    let val = ev.target.value;
    setFfont(val);
  };
  const getHeight = (ev) => {
    let val = ev.target.value;
    setHeight(val);
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
                    <label className="mt-2 d-block"> Height</label>
                    <input
                      type="number"
                      className=""
                      onChange={getHeight}
                      value={Height}
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
                    <label className="mt-2">Width</label>
                    <input
                      type="number"
                      className="form-control"
                      value={BWidth}
                      onChange={getWidth}
                    ></input>
                  </div>
                  <div>
                    <label className="mt-2 d-block">border</label>
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
                    <label className="mt-2 d-block">Text</label>
                    <textarea rows={3}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-6"
            style={{ height: "85vh", overflowY: "scroll" }}
          >
            <div className="container text-center">
              <div
                className="jumbo"
                style={{
                  width: "100%",
                  height: Height + "rem",
                  backgroundColor: Ccolor,
                }}
              >
                <p
                  className="jumboText"
                  style={{
                    color: Fcolor,
                    fontFamily: Ffamily,
                    fontSize: `${Ffont + "px"}`,
                    paddingTop: Bpadding + "px",
                  }}
                >
                  {Text}
                </p>
              </div>
            </div>
            <div className="mt-5 text-center">
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
.jumbo{
    padding-top:${Bpadding}px;
    width:${BWidth + "%"}; height:${Height + "rem"};
    background-color:${Ccolor};color:${Fcolor};
    font-family:${Ffamily}; font-size:${Ffont + "px"};
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

    <div class='jumbo'>
    <p>${Text}</p>
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

export default Jumbotron;
