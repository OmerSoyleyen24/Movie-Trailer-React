import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import axios from "axios";

const UpdatePassword = () => {
    const { darkLight, setDarkLight } = useContext(UserContext);
    const [email, setEmail] = useState();
    const [newPassword, setNewPassword] = useState();
    const navigate = useNavigate();

    const updateSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/updatePassword", { email, newPassword })
            .then(res => {
                if (res.status === 200) {
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };
    
    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight} />
            <div className={`${darkLight ? "background-light" : "background-dark"}`} style={{ marginTop: "-100px" }}>
                <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center pt-4">
                    <form className="w-75" onSubmit={updateSubmit}>
                        <h2 className={`h2 text-capitalize text-center ${darkLight ? "text-dark" : "text-white"}`}>Full Stack Movie Website | Update Password</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className={`form-label ${darkLight ? "text-dark" : "text-white"}`}>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => { setEmail(e.target.value) }} name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className={`form-label ${darkLight ? "text-dark" : "text-white"}`}>New Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setNewPassword(e.target.value) }} name="newPassword" />
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="mb-3" style={{ marginTop: "50px", width: "25%" }}>
                                <Link to={"/login"} className="btn btn-primary border-primary w-100">Login</Link>
                            </div>
                            <div className="mb-3" style={{ marginTop: "50px", width: "25%" }}>
                                <button type="submit" className={`btn ${darkLight ? "btn-light text-dark" : "btn-dark text-light"} w-100`}>Change Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UpdatePassword;