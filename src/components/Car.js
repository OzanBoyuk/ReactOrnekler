import React from "react";

const Car=(props)=>{
    return(
        <>
            <span>Markası :</span> {props.data.marka} <br/>
            <span>Model :</span> {props.data.model} <br/>
            <span>Renk :</span> {props.data.renk} <br/>
        </>
    )
}

export default Car;
