import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"
import Footer from "../components/Footer/Footer"

const indexPage = () => {
    const { darkLight, setDarkLight } = useContext(UserContext);

    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight}/>
            <Slider darkLight={darkLight}/>
            <Footer darkLight={darkLight}/>
        </React.Fragment>
    );
}

export default indexPage;