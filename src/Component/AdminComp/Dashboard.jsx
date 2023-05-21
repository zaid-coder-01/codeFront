import React, { useEffect, useState } from "react";
import axios from "axios";
import Statics from "./Statics";
import ShowApis from "./ShowApis";
import Showuser from "./Showuser";
const Dashboard = () => {
  const [apis, setapis] = useState([]);
  const [user, setuser] = useState([]);
  const [show, setshow] = useState("statics");
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setperPage] = useState(5);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getapi`)
      .then((res) => {
        setapis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getuser`)
      .then((res) => {
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const indexofLastpage = currentPage * perPage;
  const indexof1page = indexofLastpage - perPage;
  const currentData = apis.slice(indexof1page, indexofLastpage);
  const currentUData = user.slice(indexof1page, indexofLastpage);

  return (
    <>
      {show === "statics" && (
        <Statics apis={apis} user={user} setshow={setshow}></Statics>
      )}
      {show === "api" && (
        <ShowApis
          apis={currentData}
          perPage={perPage}
          total={apis.length}
          setcurrentPage={setcurrentPage}
        ></ShowApis>
      )}
      {show === "user" && (
        <Showuser
          user={currentUData}
          perPage={perPage}
          total={user.length}
          setcurrentPage={setcurrentPage}
        ></Showuser>
      )}
    </>
  );
};

export default Dashboard;
