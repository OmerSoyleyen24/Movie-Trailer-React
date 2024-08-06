import React from "react";
import { useState } from "react";
import Header from "../components/Header/Header"
import Movies from "../components/Movies/Movies"

const HomePage = () => {
    const [darkLight, setDarkLight] = useState(false);
    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight}/>
            <Movies darkLight={darkLight}/>
        </React.Fragment>
    );
}

export default HomePage;