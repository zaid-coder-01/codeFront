import axios from "axios";
import React, { useEffect } from "react";
import ICards from "./ICards";

const Index = () => {
  useEffect(()=>{
  })
  return (
    <>
      <div className="conatiner-fluid m-0 p-0">
        <div className="conatiner-fluid m-0 p-0 indexCont shadow-lg" style={{"backgroundImage":"url(jumbo.jpg)"}}>
          <div className="text-center mt-3 hdtext">
            <h2>Build Your Website With a</h2>
            <h2>Few Clicks</h2>
          </div>
          <div className="index-btn container">
            <a href="/designTemp">
              <button>
                <span></span>DESIGN TEMPLATE
              </button>
            </a>
            <a href="/Api">
              <button>
                <span></span>APIs
              </button>
            </a>
          </div>
          <div className="text-center mt-5">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className="container">
          <div className="text-center mt-5">
            <h2
              className="shadow-lg me-3 p-2"
              style={{ fontFamily: "Courgette, cursive" }}
            >
              Features
            </h2>
          </div>
          <div className="mt-5 mb-5 row row-cols-1 row-cols-md-4 g-4 me-2">
            <ICards
              img={
                "https://www.coolgenerator.com/Data/Textdesign/202303/a50eddb05aa0e2653f1324ca13d13132.png"
              }
            ></ICards>
            <ICards
              img={
                "https://www.coolgenerator.com/Data/Textdesign/202303/8d18f313cfd2aaa4ebc1fc74aaf96b88.png"
              }
            ></ICards>
            <ICards
              img={
                "https://www.coolgenerator.com/Data/Textdesign/202303/38663770a4c4a7077e477b417ae50f1e.png"
              }
            ></ICards>
            <ICards
              img={
                "https://www.coolgenerator.com/Data/Textdesign/202303/122d4b6b660c886e46e80ab9da40c59c.png"
              }
            ></ICards>
            <ICards
              img={
                "https://www.coolgenerator.com/Data/Textdesign/202303/373d3ee94631b66d97c872d5a2551cda.png"
              }
            ></ICards>
            <ICards
              img={
                "https://www.coolgenerator.com/Data/Textdesign/202303/1b0d9c66375b69917873af3408a8c285.png"
              }
            ></ICards>
          </div>
        </div>
      </div>
      <footer
        className="shadow-lg"
        style={{ height: "2.5rem", backgroundColor: "lightgray" }}
      >
        <div className="text-center">
          <h5>Footer</h5>
        </div>
      </footer>
    </>
  );
};

export default Index;
