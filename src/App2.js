import './App.css';
import React, {useEffect, useState} from "react";
import ClassBase from "./components/ClassBase";
import FunctionBase from "./components/FunctionBase";

function App2() {

  const [a,setA] = useState();


  useEffect(()=>{

  },[])


  return (
    <div className="App">
      <FunctionBase/>
    </div>
  );
}

export default App2;
