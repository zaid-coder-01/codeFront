import React, { useState } from "react";
import axios from "axios";

const AddApi = () => {
  const [Api, setApi] = useState({
    Category: "",
    Name: "",
    Description: "",
  });
  const [ApiImage, setApiImage] = useState();

  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    setApi({ ...Api, [name]: value });
  };
  const sub = (ev) => {
    ev.preventDefault();
    let form = new FormData();
    form.set("Category", Api.Category);
    form.set("Name", Api.Name);
    form.set("Description", Api.Description);
    form.set("ApiImage", ApiImage);

    const config = {
      headers: { "Content-type": "multipart/form-data" },
    };

    axios
      .post("http://localhost:3001/addApi", form, config)
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
            <h3>Add Api</h3>
          </div>
          <div className="card-body">
            <form>
              <label className="mt-2">Category</label>
              <input
                type="text"
                name="Category"
                onChange={getData}
                value={Api.Category}
                className="form-control"
              ></input>
              <label className="mt-2">Name</label>
              <input
                type="text"
                name="Name"
                onChange={getData}
                value={Api.Name}
                className="form-control"
              ></input>
              <label>Description</label>
              <textarea
                rows={5}
                name="Description"
                onChange={getData}
                value={Api.Description}
                className="form-control"
              ></textarea>
              <label className="mt-2">Api Img</label>
              <input
                type="file"
                name="Img"
                onChange={(ev) => {
                  setApiImage(ev.target.files[0]);
                }}
                className="form-control"
              ></input>

              <button
                onClick={sub}
                className=" shadow-lg form-control btn btn-success mt-4"
              >
                Add Api
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddApi;
