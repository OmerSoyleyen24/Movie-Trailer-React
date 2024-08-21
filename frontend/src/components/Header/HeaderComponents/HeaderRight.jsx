import HeaderRightItem from "./HeaderRightItem"
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";
import "./HeaderRight.css"


const HeaderRight = ({ darkLight, setDarkLight }) => {
    const { isLogin } = useContext(UserContext)
    return (
        <div className="header-right">
            <ul className="header-right-list">
                <li className="header-right-list-item">
                    <div className="dark-light">
                        <HeaderRightItem leftRight={"left"} setDarkLight={setDarkLight} />
                        <HeaderRightItem leftRight={"right"} setDarkLight={setDarkLight} />
                    </div>
                </li>
                <li className="header-right-list-item">
                    {
                        isLogin ? "" : <Link to={"/login"} className={`btn ${darkLight ? "btn-light" : "btn-dark"}`}>Oturum Aç</Link>
                    }
                </li>
            </ul>
        </div>
    )
}

export default HeaderRight