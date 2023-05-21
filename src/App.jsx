import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Navbar from "../src/Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Index from "./Component/Index";
import DesignTemp from "./Component/DesignTemp";
import Api from "./Component/Api";
import Apidetail from "./Component/Apidetail";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Setting from "./Component/Setting";
import DesignPage from "./Component/DesignPage";
import Dbutton from "./Component/Dcompo/Dbutton";
import Jumbotron from "./Component/Dcompo/Jumbotron";
import Cards from "./Component/Dcompo/Cards";
import Admin from "./Component/Admin";
import Animation from "./Component/Animation";
import Searchbar from "./Component/Dcompo/Searchbar";
import Input from "./Component/Dcompo/Input";
import Form from "./Component/Dcompo/Form";
import Table from "./Component/Dcompo/Tables";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/Api" element={<Api></Api>}></Route>
        <Route path="/testapi" element={<Animation></Animation>}></Route>
        <Route path="/dnavbar" element={<DesignPage></DesignPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/setting" element={<Setting></Setting>}></Route>
        <Route path="/newuser" element={<Register></Register>}></Route>
        <Route
          path="/apideatil/:name"
          element={<Apidetail></Apidetail>}
        ></Route>
        <Route path="/designTemp" element={<DesignTemp></DesignTemp>}></Route>
        <Route path="/designpage" element={<DesignPage></DesignPage>}></Route>
        <Route path="/dbutton" element={<Dbutton></Dbutton>}></Route>
        <Route path="/searchbar" element={<Searchbar></Searchbar>}></Route>
        <Route path="/input" element={<Input></Input>}></Route>
        <Route path="/table" element={<Table></Table>}></Route>
        <Route path="/form" element={<Form></Form>}></Route>
        <Route path="/jumbo" element={<Jumbotron></Jumbotron>}></Route>
        <Route path="/cards" element={<Cards></Cards>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
    </>
  );
};

export default App;
