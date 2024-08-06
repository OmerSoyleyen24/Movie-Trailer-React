import HeaderRightItem from "./HeaderRightItem"
import "./HeaderRight.css"

const HeaderRight = ({darkLight ,setDarkLight}) => {
    return (
        <div className="header-right">
            <ul className="header-right-list">
                <li className="header-right-list-item">
                    <div className="dark-light">
                        <HeaderRightItem leftRight={"left"} setDarkLight={setDarkLight}/>
                        <HeaderRightItem leftRight={"right"} setDarkLight={setDarkLight}/>
                    </div>
                </li>   
                <li className="header-right-list-item">
                    <form action="/login" method="GET">
                        <button type="submit" className={`btn ${darkLight ? "btn-light" : "btn-dark"}`}>Oturum Aç</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default HeaderRight