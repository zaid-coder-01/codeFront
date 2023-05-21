import React from "react";

const DesignTemp = () => {
  return (
    <>
      <div className="mt-5 apicardcont container-fluid m-3 p-3 designcard">
        <div className="text-center">
          <h2 className="shadow-lg me-3 p-2">CREATE YOUR WEBSITE COMPONENTS</h2>
        </div>

        <div className="mt-5  row row-cols-1 row-cols-md-4 g-4 me-2">
          <a href="/dnavbar">
            <div className="col">
              <div className=" card text-center">
                <h4>NAVBAR</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident placeat quas ne
                </p>
              </div>
            </div>
          </a>
          <a href="/jumbo">
            <div className="col">
              <div className="card  text-center">
                <h4>HEADER DIV</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum amet accusamus
                </p>
              </div>
            </div>
          </a>
          <a href="/cards">
            <div className="col">
              <div className="card  text-center">
                <h4>CARDS</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum amet accusamus
                </p>
              </div>
            </div>
          </a>

          <a href="/searchbar">
            <div className="col">
              <div className="card  text-center">
                <h4>SEARCH BAR</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum amet accusamus
                </p>
              </div>
            </div>
          </a>
          <a href="/form">
          <div className="col">
            <div className="card  text-center">
              <h4>FORM</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum amet accusamus
              </p>
            </div>
          </div>
          </a>

          <a href="/input">
          <div className="col">
            <div className="card  text-center">
              <h4>INPUT FIELDS</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum amet acc
              </p>
            </div>
          </div>
          </a>

          <a href="/dbutton">
            <div className="col">
              <div className="card  text-center">
                <h4>BUTTON</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum amet accusamus
                </p>
              </div>
            </div>
          </a>

          <a href="/table"><div className="col">
            <div className="card  text-center">
              <h4>TABLES</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum amet acc
              </p>
            </div>
          </div></a>

        
        </div>
      </div>
    </>
  );
};

export default DesignTemp;
