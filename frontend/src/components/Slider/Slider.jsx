import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./Slider.css";

function Slider({ darkLight }) {
    const { setEmail } = useContext(UserContext);
    const sliderEmail = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section id="slider" className={`${darkLight ? "background-light" :"background-dark"}`}>
            <div className="container">
                <div className="slider-wrapper">
                    <div className="slider-text">
                        <h2>Sinema Keyfinizi Evde Yaşayın: Binlerce Film Bir Tık Uzağınızda.</h2>
                    </div>
                    <div className="slider-button" id="slider-button">
                        <input
                            type="email"
                            className="slider-input"
                            placeholder="Email Adresinizi Giriniz"
                            onChange={(e) => sliderEmail(e.target.value)}
                        />
                        <Link to="/signup" className="slider-signup">Kayıt Ol</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider;
