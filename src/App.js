import logo from './logo.svg';
import './App.css';
import ClassBase from "./components/ClassBase";
import FunctionBase from "./components/FunctionBase";
import Car from "./components/Car";
import React from "react";

function App() {


  const helloOzan = <div>Hello ozan</div>
  const helloTuna = <div>Hello tuna</div>

  const carList = [
      {
          "id":"10",
          "marka" : "bmw",
          "model" : "320",
          "renk" : "siyah",
      },
      {
          "id":"11",
          "marka" : "bmw",
          "model" : "520",
          "renk" : "mavi",
      },
      {
          "id":"12",
          "marka" : "bmw",
          "model" : "1020",
          "renk" : "yeşil",
      }
  ]


  return (
    <div className="App">
      <ClassBase/>
      <FunctionBase helloMessage={"Hello"}/>
        {
            carList && carList.length > 0 && carList.map(car=>{
                return(
                    <Car data={car} />
                )
            })
        }
    </div>
  );
}

export default App;
