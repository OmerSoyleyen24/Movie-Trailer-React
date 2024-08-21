import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header"
import MovieDesc from "../components/Movies/Movie/MovieDesc";

const MovieDescPage = () => {
    const { darkLight, setDarkLight } = useContext(UserContext);

    return (
        <React.Fragment>
            <Header darkLight={darkLight} setDarkLight={setDarkLight}/>
            <MovieDesc darkLight={darkLight}/>
            <section id="single-film" className={`${darkLight ? "background-light" :"background-dark"}`}>
                <div className="container">
                    <div className="single-film-wrapper">
                        <ul id="single-film-informa tion">
                        </ul>
                        <div className="single-film-reviews">
                            <div className="single-film-review-questions">
                                <h2>Yorumlar</h2>
                                <ul className="single-film-review-questions-star-list">
                                    <li className="single-film-star" value="1">
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li className="single-film-star" value="2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li className="single-film-star" value="3">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li className="single-film-star" value="4">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                    <li className="single-film-star" value="5">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </li>
                                </ul>
                                <label htmlFor="ad" style={{display:"flex",flexDirection:"column",rowGap: "20px",width:"100%"}}>
                                    Ad Soyad
                                    <input type="text" id="ad" className="commit-input" />
                                </label>
                                <label htmlFor="yorum" style={{display:"flex",flexDirection:"column",rowGap: "20px"}}>
                                    Yorum Alanı
                                    <textarea cols="100%" rows="10" id="yorum" className="commit-input"></textarea>
                                </label>
                                <button className="btn btn-dark" id="commit-submit">Yorumumu Paylaş</button>
                            </div>
                            <div className="single-film-reviews-list-div">
                                <ul className="single-film-reviews-list" id="single-film-reviews-list"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MovieDescPage;