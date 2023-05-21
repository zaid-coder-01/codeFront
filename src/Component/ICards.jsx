import React from "react";

const ICards = ({img}) => {
  return (
    <>
            <div className="col-md-4">
              <div className="card" style={{"backgroundColor":"rgba(0,0,0,0)","border":"none"}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={img} alt="alt" className="indeximg" />
                    </div>
                    <div className="col-md-7 mt-2 cardtext">
                      <p>
                        A wiki enables communities of editors and contributors
                        to write documents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default ICards;
