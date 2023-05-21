import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Apidetail = () => {
  const param = useParams();
  const [apis, setapis] = useState([]);
  const [usname, setusname] = useState();
  const [islog, setislog] = useState(false);
  const [iskey, setiskey] = useState(false);
  const [keydata, setkeydata] = useState("Generate a key from setting");
  const [optio, setoptio] = useState("NodeJs");
  useEffect(() => {
    if (sessionStorage.getItem("users") != null) {
      const loguser = sessionStorage.getItem("users");
      const username = JSON.parse(loguser);
      setusname(username.uname);
      setislog(true);
    }
    axios
      .post(process.env.REACT_APP_BACKEND + "/getKe", { usname })
      .then((res) => {
        setkeydata(res.data.Key);
        setiskey(true);
      });
    const url = process.env.REACT_APP_BACKEND + "/getapi";
    axios
      .get(url)
      .then((res) => {
        setapis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [islog, keydata]);
  return (
    <>
      {apis.map((data) => {
        if (data.Name === param.name) {
          return (
            <div key={data._id}>
              <div className="apihead container-fluid m-2 p-2">
                <div className="subapihead">
                  <div>
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/getApis/${data.Image}`}
                      alt="not get"
                      className="apidetimg"
                    ></img>
                  </div>
                  <div className="text-center ms-3">
                    <h4>{param.name}</h4>
                  </div>
                </div>
                
              </div>

              <div className="mt-3 container-fluid m-2 p-2">
                <p>{data.Description}</p>
              </div>
            </div>
          );
        } else {
          return <div key={data._id}></div>;
        }
      })}
      <div className="container-fluid m-1 p-2">
        <div className="row mt-2">
          <div className="col-md-7">
            <div className="card apicon">
              <div className="card-header">Request Parameters</div>
              <div className="card-body">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam labore odio fugiat similique assumenda veritatis
                    neque tempore, a facilis nam consequatur nemo debitis
                    corporis voluptates fuga amet tempora eos ut.
                  </p>
                </div>

                <div className="apifield mt-5">
                  <label>REQUEST-URL</label>
                  <input
                    type="text"
                    className=""
                    value={`https://localhost:3001/getapidata`}
                    readOnly
                  ></input>
                </div>
                <div className="mt-5">
                  <h5>Header Parameters</h5>
                </div>
                <div className="apifield mt-5">
                  <label>API-Key</label>
                  {iskey ? (
                    <input
                      type="text"
                      className=""
                      value={keydata}
                      readOnly
                    ></input>
                  ) : (
                    <input
                      type="text"
                      className=""
                      value="Sign in and Generate a key from setting"
                      readOnly
                    ></input>
                  )}
                </div>

                <div className="apifield mt-5">
                  <label>API-Host</label>
                  <input
                    type="text"
                    className=""
                    value="CodeSolution"
                    readOnly
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card apicode">
              <div className="card-header">Code</div>
              <div className="card-body">
                <div>
                  <select
                    onChange={(ev) => {
                      setoptio(ev.target.value);
                    }}
                  >
                    <option>NodeJs</option>
                    <option>Javascipt</option>
                    <option>Java</option>
                    <option>Python</option>
                  </select>
                </div>

                <div className="mt-5">
                  {optio === "NodeJs" && (
                    <pre>
                      <h6>{`const axios = require("axios");


const options = {
      method: 'GET',
      url: 'http://localhost:3001/getapidata?name=${param.name}',
      params: {fra: 'true'},
      headers: {
        'X-Key':'${keydata}',
      }
    };
    axios.request(options).then((data)=>{
        console.log(data);
    }).catch((err)=>{
      console.log(err)
    })`}</h6>
                    </pre>
                  )}

                  {optio === "Javascipt" && (
                    <pre>
                      <h6>{` const options = {
      method: 'GET',
      params: {fra: 'true'},
      headers: {
        'X-Key':'${keydata}',
      }
    };
    fetch('http://localhost:3001/getapidata?name=${param.name}',options).then((data)=>{
        return data.json();;
    }).then((dat)=>{console.log(dat)}).catch((err)=>{
      console.log(err)
    })`}</h6>
                    </pre>
                  )}
                  {optio === "Java" && (
                    <pre>
                      <h6>{` HttpRequest request = HttpRequest.newBuilder()
                      
  .uri(URI.create('http://localhost:3001/getapidata?name=${param.name}'))
  .header("X-Key",'${keydata}')

  .method("GET", HttpRequest.BodyPublishers.noBody())

  .build();

HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

System.out.println(response.body());`}</h6>
                    </pre>
                  )}
                  {optio === "Python" && (
                    <pre>
                      <h6>{` import requests

url = 'http://localhost:3001/getapidata?name=${param.name}'
headers = {
	"X-Key":'${keydata}',
}

response = requests.request("GET", url, headers=headers)

print(response.text)`}</h6>
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apidetail;
