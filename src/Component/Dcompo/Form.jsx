import React, { useState } from "react";

const Form = () => {
  const [Ccolor, setCcolor] = useState("white");
  const [Ffont, setFfont] = useState("18");
  const [Rrange, setRrange] = useState("0");
  const [Fcolor, setFcolor] = useState("black");
  const [BColor, setBColor] = useState("white");
  const [BWidth, setBWidth] = useState("8");
  const [FWidth, setFWidth] = useState("18");
  const [Height, setHeight] = useState("25");
  const [FormWidth, setFormWidth] = useState("25");
  const [Border, setBorder] = useState("1");
  const [Bpadding, setBpadding] = useState("3");
  const [fMargin, setfMargin] = useState("8");
  const [bMargin, setbMargin] = useState("8");
  const [isCode, setisCode] = useState(false);
  const [Ffamily, setFfamily] = useState("arial");
  const color = (ev) => {
    setCcolor(ev.target.style.backgroundColor);
  };
  const getFont = (ev) => {
    let val = ev.target.value;
    setFfont(val);
  };
  const getBColor = (ev) => {
    let val = ev.target.value;
    setBColor(val);
  };
  const getHeight = (ev) => {
    let val = ev.target.value;
    setHeight(val);
  };
  const getfMargin = (ev) => {
    let val = ev.target.value;
    setfMargin(val);
  };
  const getbMargin = (ev) => {
    let val = ev.target.value;
    setbMargin(val);
  };
  const getFormWidth = (ev) => {
    let val = ev.target.value;
    setFormWidth(val);
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
                    <label className="mt-3"> Button Color </label>
                    <input
                      type="color"
                      className="form-control"
                      value={BColor}
                      onChange={getBColor}
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
                    <label className="mt-2">Height</label>
                    <input
                      type="number"
                      className="form-control"
                      value={Height}
                      onChange={getHeight}
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
                  <div className="">
                    <label className="mt-2">Form Width</label>
                    <input
                      type="number"
                      className="form-control"
                      value={FormWidth}
                      onChange={getFormWidth}
                    ></input>
                  </div>
                </div>

                <div className="mt-3 d-flex moreC ms-3">
                  <div>
                    <label className="mt-2 d-block">Field Margin</label>
                    <input
                      type="number"
                      className="form-control"
                      value={fMargin}
                      onChange={getfMargin}
                    ></input>
                  </div>
                  <div className="">
                    <label className="mt-2">Button Margin</label>
                    <input
                      type="number"
                      className="form-control"
                      value={bMargin}
                      onChange={getbMargin}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 overflow-scroll" style={{ height: "80vh"}}>
            <div className="container text-center d-flex justify-content-center mt-5">
              <div
                style={{
                  height: Height + "rem",
                  width: FormWidth + "rem",
                  backgroundColor: Ccolor,
                }}
              >
                <input
                  type="text"
                  style={{
                    width: FWidth + "rem",
                    padding: Bpadding + "px",
                    borderRadius: Rrange + "px",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                    border: Border + "px solid black",
                    margin: fMargin + "px",
                  }}
                ></input>
                <input
                  type="text"
                  style={{
                    width: FWidth + "rem",
                    padding: Bpadding + "px",
                    borderRadius: Rrange + "px",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                    border: Border + "px solid black",
                    margin: fMargin + "px",
                  }}
                ></input>
                <input
                  type="text"
                  style={{
                    width: FWidth + "rem",
                    padding: Bpadding + "px",
                    borderRadius: Rrange + "px",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                    border: Border + "px solid black",
                    margin: fMargin + "px",
                  }}
                ></input>
                <input
                  type="text"
                  style={{
                    width: FWidth + "rem",
                    padding: Bpadding + "px",
                    borderRadius: Rrange + "px",
                    fontSize: Ffont + "px",
                    color: Fcolor,
                    fontFamily: Ffamily,
                    border: Border + "px solid black",
                    margin: fMargin + "px",
                  }}
                ></input>
                <button
                  style={{
                    width: BWidth + "rem",
                    backgroundColor: BColor,
                    color: Fcolor,
                    fontFamily: Ffamily,
                    fontSize: Ffont + "px",
                    border: Border + "px solid black",
                    borderRadius: Rrange + "px",
                    padding: Bpadding + "px",
                    margin: bMargin + "px",
                  }}
                >
                  SUBMIT
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
.form{
    height: ${Height}rem;
    width: ${FormWidth}rem;
    background-color: ${Ccolor};
    display:block;
    justify-content:center;
}
.field{
  width: ${FWidth}rem;
  padding: ${Bpadding}px;
  border-radius: ${Rrange}px;
  font-size: ${Ffont}px;
  font-family:${Ffamily}; 
  border:${Border}px solid black;
  color:${Fcolor};
  margin:${fMargin}px;
 }
.btn{
    width: ${BWidth}rem;
    background-color: ${BColor};
    color: ${Fcolor};
    font-family: ${Ffamily};
    font-size: ${Ffont}px;
    border: ${Border}px solid black;
    border-radius: ${Rrange}px;
    padding: ${Bpadding}px;
    margin:${bMargin}px; 
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
                                 
    <div class='form'>
      <input type="text" class='field'></input>
      <input type="text" class='field'></input>
      <input type="text" class='field'></input>
      <input type="text" class='field'></input>
      <button class='btn'>Submit</button>
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

export default Form;
