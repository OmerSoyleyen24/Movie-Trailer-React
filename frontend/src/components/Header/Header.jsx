import HeaderLeft from "./HeaderComponents/HeaderLeft";
import HeaderRight from "./HeaderComponents/HeaderRight";
import "./Header.css"

const Header = ({darkLight, setDarkLight, isLogin}) => {
    return (
        <header id="header" className={`${darkLight ? "background-light" :"background-dark"}`}>
            <div className="container">
                <div className="header-wrapper">
                    <HeaderLeft darkLight={darkLight}/>
                    <HeaderRight darkLight={darkLight} setDarkLight={setDarkLight}/>
                </div>
            </div>
        </header>
    );
}

export default Header;