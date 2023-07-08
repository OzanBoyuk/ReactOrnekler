import React, {useEffect, useState} from "react";

const FunctionBase = (props) => {

    const [color,setColor] = useState("red");

    const changeColor=()=>{

        if (color === "blue"){
            setColor("red")
        }

        if (color === "red"){
            setColor("blue")
        }
    }

    useEffect(()=>{
        console.log("useEffect calıstı")
    },[color])

    console.log("render calıstı");

    return (
        <div>
            <div>
                <button onClick={()=>changeColor()}>Tıkla</button>
                <h2 style={{color:color}}>{color}</h2>
            </div>
        </div>
    )
}

export default FunctionBase;
