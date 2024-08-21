import React from "react";
import { useState, useEffect, useContext } from "react"
import axios from "axios";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import "./AdminPage.css";

const AdminPage = () => {
    const { darkLight, setDarkLight } = useContext(UserContext);
    const [email, setEmail] = useState();
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState([""]);
    const [newPassword, setNewPassword] = useState([""]);
    const [confirmPassword, setConfirmPassword] = useState();
    const [updateUserDataDiv, setUpdateUserDataDiv] = useState(false);
    const [addUserDataDiv, setAddUserDataDiv] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/admin/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Kullanıcı verilerini çekerken hata oluştu:", error);
            }
        };

        fetchUsers();
    }, [users]);

    const deleteUserData = async (emailAddress) => {
        try {
            await axios.delete(`http://localhost:5000/admin/users/${emailAddress}`);
            setUsers(users.filter(user => user.emailAddress !== emailAddress));
        } catch (error) {
            console.error("Kullanıcı silinirken hata oluştu:", error);
        }
    };

    const updateUserData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/updatePassword", { email, newPassword });
        setUpdateUserDataDiv(false);
    };

    const addUserData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/signup", { email, password, confirmPassword });
        setAddUserDataDiv(false);
    };

    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight} />
            <div className={`${darkLight ? "background-light" : "background-dark"}`}>
                <div className="container">
                    <div className="admin-wrapper">
                        <table className={`${darkLight ? "background-dark" : "background-light"}`}>
                            <thead>
                                <tr className={`${darkLight ? "background-light" : "background-dark"}`}>
                                    <th>Kullanıcılar</th>
                                    <th>Email Adresi</th>
                                    <th>Şifre</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, id) => (
                                    <tr key={id + 1}>
                                        <td>{id + 1}</td>
                                        <td>{user.emailAddress}</td>
                                        <td>{user.password}</td>
                                        <td className="buttons">
                                            <button className="delete" onClick={() => deleteUserData(user.emailAddress)}>
                                                Kullanıcı Bilgisini Sil
                                            </button>
                                            <button className="update" onClick={() => { setEmail(user.emailAddress); setUpdateUserDataDiv(true) }}>
                                                Kullanıcı Bilgisini Güncelle
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="addUser" onClick={() => { setAddUserDataDiv(true) }}>Kullanıcı Ekle</button>
                        <form onSubmit={updateUserData} className={`updatePassword ${darkLight ? "background-dark" : "background-light"} ${updateUserDataDiv ? "d-block" : "d-none"}`} style={{ display: "" }}>
                            <h2>Yeni Şifre</h2>
                            <input
                                type="text"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <button type="submit">Şifreyi Güncelle</button>
                        </form>
                        <form onSubmit={addUserData} className={`addUser ${darkLight ? "background-dark" : "background-light"} ${addUserDataDiv ? "d-block" : "d-none"}`} style={{ display: "" }}>
                            <h2>Yeni Kullanıcı</h2>
                            <label htmlFor="email">
                                Email:
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /></label>
                            <label htmlFor="password">
                                Password:
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            <label htmlFor="password">
                                Confirm Password:
                                <input
                                    type="text"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </label>
                            <button type="submit">Kullanıcı Ekle</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AdminPage;