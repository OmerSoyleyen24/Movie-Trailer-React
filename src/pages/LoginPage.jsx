import React from 'react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';

const LoginPage = () => {
    const [darkLight, setDarkLight] = useState(false);

    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight} />
            <Form type={"login"} darkLight={darkLight}/>
        </React.Fragment>
    );
}

export default LoginPage;








