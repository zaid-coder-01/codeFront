import React, { useState } from "react";
import axios from "axios";
import $ from "jquery";
const Keygen = ({ uname }) => {
  const [Key, setKey] = useState("");
  const Keys = () => {
    const pattern =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&";
    let key = "";
    const keysize = 30;
    for (let i = 0; i < keysize; i++) {
      key += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    setKey(key);
  };
  const [AdKey, setAdKey] = useState({
    appname: "",
  });
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    setAdKey({ ...AdKey, [name]: value });
  };
  const sub = (ev) => {
    ev.preventDefault();
    const form = {
      AppName: AdKey.appname,
      Key: $("#ke").val(),
      username: uname.uname,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/addKey`, form)
      .then((res) => {
        alert("added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h3 className="text-center mt-5 shadow-lg p-2">GENERATE KEY</h3>
      <div className="card mt-5 PT-3 form-control">
        <div className="card-body mt-3">
          <form>
            <label>Application Name</label>
            <input
              type="text"
              name="appname"
              onChange={getData}
              value={AdKey.appname}
              className="form-control"
              placeholder="Enter your project name"
            ></input>
            <label className="mt-2">APIs Key</label>
            <input
              type="text"
              name="key"
              id="ke"
              readOnly=""
              contentEditable="false"
              className="form-control"
              value={Key}
              placeholder="key"
            ></input>
            <div className="genkey">
              <a href="?#" onClick={Keys}>
                Generate Key
              </a>
            </div>
            <button onClick={sub} className="form-control btn btn-success mt-4">
              CREATE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Keygen;
