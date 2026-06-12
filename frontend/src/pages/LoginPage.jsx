import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";

const LoginPage = () => {
    const { darkLight, setDarkLight } = useContext(UserContext);

    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight} />
            <Form type={"login"} darkLight={darkLight}/>
        </React.Fragment>
    );
}

export default LoginPage;