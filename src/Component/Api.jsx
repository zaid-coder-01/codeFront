import React, { useEffect, useState } from "react";
import axios from "axios";
import Apishow from "./Apishow";
const Api = () => {
  const [apis, setapis] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setperPage] = useState(8);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getapi`)
      .then((res) => {
        setapis(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const indexofLastpage = currentPage * perPage;
  const indexof1page = indexofLastpage - perPage;
  const currentData = apis.slice(indexof1page, indexofLastpage);
  return (
    <>
      <div className="container mt-5 apicont">
        <Apishow
          apis={currentData}
          perPage={perPage}
          total={apis.length}
          setcurrentPage={setcurrentPage}
        ></Apishow>
      </div>
    </>
  );
};

export default Api;
