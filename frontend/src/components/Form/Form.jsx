import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Form = ({ type, darkLight }) => {
    const { setIsLogin, email, setEmail, password, setPassword } = useContext(UserContext);
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", { email, password })
            .then(res => {
                if (res.status === 200) {
                    navigate("/home");
                    setIsLogin(true);
                }
                else if(res.status === 201){
                    navigate("/admin/users");
                    setIsLogin(true);
                }
                else {
                    console.log("Email or password is incorrect");
                }
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };

    const signupSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/signup", { email, password, confirmPassword })
            .then(res => {
                if (res.status === 201) {
                    navigate("/login");
                }
                else {
                    console.log("Password and Confirm Password not equal");
                }
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };
    return (
        <div className={`${darkLight ? "background-light" : "background-dark"}`} style={{ marginTop: "-100px" }}>
            <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center pt-4">
                <form className="w-75" onSubmit={type === "login" ? loginSubmit : signupSubmit}>
                    <h2 className={`h2 text-capitalize text-center ${darkLight ? "text-dark" : "text-white"}`}>Full Stack Movie Website | {type}</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className={`form-label ${darkLight ? "text-dark" : "text-white"}`}>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => { setEmail(e.target.value) }} name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className={`form-label ${darkLight ? "text-dark" : "text-white"}`}>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} name="password" />
                    </div>
                    {type != "signup" ?
                        <div className="mb-3 mb-3-link">
                            <Link to={"/updatePassword"}>I forgot my password</Link>
                        </div>
                        : ""}
                    {type == "signup" ?
                        <div className="mb-3">
                             <label htmlFor="exampleInputPassword2" className={`form-label ${darkLight ? "text-dark" : "text-white"}`}>Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" onChange={(e) => { setConfirmPassword(e.target.value) }} name="confirmPassword" />
                        </div>
                        : ""}
                    {type == "signup" ?
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="mb-3" style={{ marginTop: "50px", width: "25%" }}>
                                <Link to={"/login"} className="btn btn-primary border-primary w-100">Login</Link>
                            </div>
                            <div className="mb-3" style={{ marginTop: "50px", width: "25%" }}>
                                <button type="submit" className={`btn ${darkLight ? "btn-light text-dark" : "btn-dark text-light"} w-100`}>Signup</button>
                            </div>
                        </div>
                        :
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="mb-3" style={{ marginTop: "50px", width: "25%" }}>
                                <button type="submit" className={`btn btn-primary border-white w-100`}>Login</button>
                            </div>
                            <div className="mb-3" style={{ marginTop: "50px", width: "25%" }}>
                                <Link to={"/signup"} className={`btn ${darkLight ? "btn-light text-dark" : "btn-dark border-dark text-light "} w-100`}>Signup</Link>
                            </div>
                        </div>}
                </form>
            </div>
        </div>
    )
}

export default Form