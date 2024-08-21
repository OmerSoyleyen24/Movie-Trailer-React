import React from "react"
import { MoonFill, SunFill } from "react-bootstrap-icons";

const HeaderRightItem = ({leftRight,setDarkLight}) => {
    const icon = leftRight === "left" ? <SunFill id="light"/> : <MoonFill id="dark"/>;
    return (
        <div className={`dark-light-${leftRight}`} id={`dark-light-${leftRight}`} onClick={() => {
            if(leftRight === "left"){
                setDarkLight(true)
            }
            else if(leftRight === "right"){
                setDarkLight(false)
            }
            else{
                console.log("Error")
            }
            }
            }>
            {icon}
        </div>
    )
}

export default HeaderRightItem