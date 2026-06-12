import { Link } from "react-router-dom";

const HeaderLeft = ({darkLight}) => {
    return (
        <div className={`header-left logo ${darkLight ? "background-light" :"background-dark"}`}>
            <Link to={"/"}>LOGO</Link>
        </div>
    )
}

export default HeaderLeft