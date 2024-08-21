import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [darkLight, setDarkLight] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <UserContext.Provider value={{ isLogin, setIsLogin, darkLight, setDarkLight, email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }