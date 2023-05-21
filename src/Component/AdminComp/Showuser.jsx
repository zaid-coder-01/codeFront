import React from "react";

const Showuser = ({ user, perPage, total, setcurrentPage }) => {
  let arr = [];
  for (let i = 0; i < Math.ceil(total / perPage); i++) {
    arr.push(i);
  }
  return (
    <>
      <div className="mt-3 ms-3">
        <a href="/admin" className="btn btn-primary">
          BACK
        </a>
      </div>
      <div className="mt-5">
        <h4 className="text-center">LIST OF ALL USERS</h4>
        <div className="container p-2">
          <table class="table table-striped bg-white table-hover table-bordered shadow-lg">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {user.map((data, index) => {
                let url = `${process.env.REACT_APP_BACKEND}/getApis/${data.Image}`;
                return (
                  <tr key={data._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.uname}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination">
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
      </div>
    </>
  );
};

export default Showuser;
