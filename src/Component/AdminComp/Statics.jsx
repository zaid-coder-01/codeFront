import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { LineChart, Line } from "recharts";
const Statics = ({ apis, user ,setshow}) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="dashS d-flex justify-content-around mt-5">
        <div
          className="statics  text-center pt-4"
          style={{ backgroundColor: "rgba(0,255,0,0.2)" }}
          onClick={()=>{setshow("api")}}
        >
          <h3>Total &nbsp;API</h3>
          <h3>{apis.length}</h3>
        </div>
        <div
          className="statics  text-center pt-4"
          style={{ backgroundColor: "rgba(255,0,0,0.2)" }}
          onClick={()=>{setshow("user")}}
        >
          <h3>Total &nbsp;Users</h3>
          <h3>{user.length}</h3>
        </div>
        <div
          className="statics  text-center pt-4"
          style={{ backgroundColor: "rgba(30,70,255,0.2)" }}
        >
          <h3>Total &nbsp;API</h3>
          <h3>{apis.length}</h3>
        </div>
      </div>
      <div className="dashG d-flex justify-content-around mt-5 pt-5">
        <div className="staG">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 1,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="staG">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 2,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Statics;
