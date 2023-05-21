import React,{useEffect,useState} from "react";
import axios from "axios";
const Animation = () => {
  const [method, setmethod] = useState('GET');
  const [url, seturl] = useState('');
  const [resp, setresp] = useState();
  const [head, sethead] = useState('x-code');
  const [param, setparam] = useState('');
  const [headvalue, setheadvalue] = useState('');
  const [paramvalue, setparamvalue] = useState('null');
  const sub=()=>{
    const options = {
      method: method,
      params: {[param]: paramvalue},
      headers: {
        [head]:headvalue,
      }
    };
    axios
    .get(url,options)
    .then((res) => {
      setresp(JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
   }
  return (
    <>
      <div className="mt-3 apicardcont container-fluid m-3 p-3 designcard">
        <div className="text-center">
          <h2 className="shadow-lg me-3 p-2">
              TEST YOUR ENDPOINT HERE
          </h2>
        </div>
      </div>
      <div className=" container p-3" style={{border:'2px solid black',width:'85rem'}}>
      <div className="d-flex justify-content-around container">
        <div><select style={{'fontSize':'1.3rem'}} onChange={(ev)=>{setmethod(ev.target.value)}}>
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select></div>
        <div>
          <input type='text' placeholder="url" onChange={(ev)=>{seturl(ev.target.value)}} className="form-control" style={{'width':'50rem','fontSize':'1.3rem'}}></input>
        </div>
        <div>
          <button onClick={sub} className="btn btn-primary">TEST</button>
          </div>
      </div>
      <div className="container mt-5 d-flex justify-content-center">
      <div className="me-1">
          <input type='text' placeholder="headers key (optional)" onChange={(ev)=>{sethead(ev.target.value)}} className="form-control" style={{'width':'19rem','fontSize':'1.3rem'}}></input>
        </div>
        <div className="me-1">
          <input type='text' placeholder="header value (optional)" onChange={(ev)=>{setheadvalue(ev.target.value)}} className="form-control" style={{'width':'19rem','fontSize':'1.3rem'}}></input>
        </div>
        <div className="me-1">
          <input type='text' placeholder="params key (optional)" onChange={(ev)=>{setparam(ev.target.value)}} className="form-control" style={{'width':'19rem','fontSize':'1.3rem'}}></input>
        </div>
        <div>
          <input type='text' placeholder="params value (optional)" onChange={(ev)=>{setparamvalue(ev.target.value)}} className="form-control" style={{'width':'19rem','fontSize':'1.3rem'}}></input>
        </div>
      </div>
 </div>
      <div className="mt-5 container m-4 p-3 fetch" style={{'marginRight':'3rem',border:'',width:'85rem',overflow:'scroll',wordwrap:'break-word'}}>
        <p>{resp}</p>
      </div>
    </>
  );
};

export default Animation;
