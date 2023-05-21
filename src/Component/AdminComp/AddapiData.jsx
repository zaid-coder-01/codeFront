import React, { useState, useEffect } from "react";
import axios from "axios";

const AddapiData = () => {
  const [apis, setapis] = useState([]);
  const [Api, setApi] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getapi`)
      .then((res) => {
        setapis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const [ApiImage, setApiImage] = useState();

  const getData = (ev) => {
    setApi(ev.target.value);
  };
  const sub = (ev) => {
    ev.preventDefault();
    const form={
      Name:Api,
      Data:ApiImage
    }

    axios
      .post("http://localhost:3001/addApidata",form)
      .then((res) => {
        if (res.data !== "") {
          alert("added");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container col-md-8">
        <div className="card mt-5 shadow-lg">
          <div className="text-center mt-3">
            <h3>Add Api Data</h3>
          </div>
          <div className="card-body">
            <form>
              <label className="mt-2">Category</label>
              <select
                type="text"
                name="Category"
                onChange={getData}
                value={Api}
                className="form-control"
              >
                {apis.map((data) => {
                  return <option>{data.Name}</option>;
                })}
              </select>
              <label className="mt-2">Data</label>
              <input
                type="file"
                name="Img"
                onChange={(ev) => {
                  const file = ev.target.files[0];
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const contents = event.target.result;
                    setApiImage(contents); // do something with the file contents
                  };
                  reader.readAsText(file);
                }}
                className="form-control"
              ></input>

              <button
                onClick={sub}
                className=" shadow-lg form-control btn btn-success mt-4"
              >
                Add Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddapiData;
