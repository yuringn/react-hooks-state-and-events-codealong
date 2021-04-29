import React, {useState} from "react";

function Toggle() {

  const [isOn, setIsOn] =useState(false)

  const color =isOn ? "white" :"grey"

  return <button style={{background:color}} onClick={()=>setIsOn(!isOn)}>{isOn? "ON" :"OFF"}</button>;
}

export default Toggle;
