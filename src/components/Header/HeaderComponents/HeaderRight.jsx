import { ArrowRight, MoonFill, SunFill } from 'react-bootstrap-icons';
import "./HeaderRight.css"

const HeaderRight = ({darkLight ,setDarkLight}) => {
    return (
        <div className="header-right">
            <ul className="header-right-list">
                <li className="header-right-list-item">
                    <div className="dark-light">
                        <div className="dark-light-left" id="dark-light-left" onClick={()=>setDarkLight(true)}>
                            <SunFill id="light"/>
                        </div>
                        <div className="dark-light-right" id="dark-light-right" onClick={()=>setDarkLight(false)}>
                            <MoonFill id="dark"/>
                        </div>
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