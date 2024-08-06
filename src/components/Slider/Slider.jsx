import { Link } from "react-router-dom";
import "./Slider.css"

function Slider({darkLight}) {
    return (
        <section id="slider" className={`${darkLight ? "background-light" :"background-dark"}`}>
            <div className="container">
                <div className="slider-wrapper">
                    <div className="slider-text">
                        <h2>Sinema Keyfinizi Evde Yaşayın: Binlerce Film Bir Tık Uzağınızda.</h2>
                    </div>
                    <div className="slider-button" id="slider-button">
                        <input type="email" className="slider-input" placeholder="Email Adresinizi Giriniz" />
                        <Link to={"/signup"} className="slider-signup">Kayıt Ol</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;