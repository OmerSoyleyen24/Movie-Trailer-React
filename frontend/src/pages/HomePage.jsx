import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header"
import Movies from "../components/Movies/Movies"

const HomePage = () => {
    const { darkLight, setDarkLight } = useContext(UserContext);

    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight}/>
            <Movies darkLight={darkLight}/>
        </React.Fragment>
    );
}

export default HomePage;