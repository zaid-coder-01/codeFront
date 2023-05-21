import React from "react";

const Apishow = ({ apis, perPage, total, setcurrentPage }) => {
  let arr = [];
  for (let i = 0; i < Math.ceil(total / perPage); i++) {
    arr.push(i);
  }
  return (
    <>
      <div className="mt-5 apicardcont">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {apis.map((data) => {
            const url = `${process.env.REACT_APP_BACKEND}/getApis/${data.Image}`;
            return (
              <div className="col" key={data._id}>
                <div className="card shadow-lg">
                  <a
                    href={`/apideatil/${data.Name}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="card text-center">
                      <h5 className="pt-2">{data.Name}</h5>
                      <img
                        src={url}
                        className=" d-block mx-auto card-img-top apiimg"
                        alt="..."
                      />
                      <div className="card-body">{data.Description}</div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination mt-5 pt-2">
        {arr.map((data) => {
          return (
            <div className="pagiBtn">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setcurrentPage(data + 1);
                }}
              >
                {data + 1}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Apishow;
