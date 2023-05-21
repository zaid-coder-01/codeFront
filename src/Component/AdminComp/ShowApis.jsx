import React from "react";

const ShowApis = ({ apis, perPage, total, setcurrentPage }) => {
  let arr = [];
  for (let i = 0; i < Math.ceil(total / perPage); i++) {
    arr.push(i);
  }
  return (
    <>
      <div className="mt-2 ms-3">
        <a href="/admin" className="btn btn-primary">
          BACK
        </a>
      </div>
      <div className="mt-5">
        <h4 className="text-center">LIST OF ALL API'S</h4>
        <div className="container p-2">
          <table class="table table-striped bg-white table-hover table-bordered shadow-lg">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Category</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {apis.map((data, index) => {
                let url = `${process.env.REACT_APP_BACKEND}/getApis/${data.Image}`;
                return (
                  <tr key={data._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.Category}</td>
                    <td>{data.Name}</td>
                    <td>
                      <img src={url}></img>
                    </td>
                    <td>{data.Description}</td>
                    <td className="text-center"><i className="fa fa-edit" style={{"font-size":"1.2rem","color":"red"}}></i></td>
                    <td  className="text-center"><i className="fa fa-trash" style={{"font-size":"1.2rem","color":"red"}}></i></td>
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

export default ShowApis;
