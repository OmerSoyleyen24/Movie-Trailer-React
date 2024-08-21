import FooterListItem from "./FooterComponents/FooterListItem";
import "./Footer.css";

const Footer = ({darkLight}) => {
    return (
        <footer id="footer" className={`${darkLight ? "background-light" :"background-dark"}`}>
            <div className="container">
                <div className="footer-wrapper">
                    <h3>LOGO Hakkında</h3>
                    <ul className="footer-list">
                        <FooterListItem firstParagraph={"Logo Nedir ?"} secondParagraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos, ipsam officiacum nobis natus neque libero recusandae repudiandae qui. Corporis nemo dignissimos culpaincidunt, quibusdam, iure minus officiis quia eius error maxime? Deleniti mollitia ametpariatur optio necessitatibus dolor cumque vitae alias ea numquam. Voluptas laudantium, ipsahic laborum, blanditiis amet beatae officiis quia explicabo similique error cum liberoquibusdam? Praesentium ut quis sunt nostrum inventore nihil aliquam nesciunt, nobis atmagni? Repudiandae deserunt aut sit odit necessitatibus quos dolor error et suscipiteveniet, tempore magnam nostrum tempora consectetur hic iure commodi. Unde, maioresdoloremque numquam aperiam totam iste?"}/>
                        <FooterListItem firstParagraph={"Logonun Maliyeti Nedir"} secondParagraph={"Logoyu kullanmak için aylık sadece 100 TL ödemeniz yeterli."}/>
                        <FooterListItem firstParagraph={"Logoyu Nerede İzleyebilirim ?"} secondParagraph={"Logoyu telefon da,bilgisayar da kısacası internet tarayıcısı olan her yerdeizleyebilirsiniz."}/>
                        <FooterListItem firstParagraph={"Logoda Neler İzleyebilirim ?"} secondParagraph={"Logodaki binlerce filmden istediğiniz izleyebilirsiniz."}/>
                        <FooterListItem firstParagraph={"Logo Farklı Dillerde Mevcut mu ?"} secondParagraph={"Logoda sadece Türkçe ve İngilizce mevcut."}/>
                        <FooterListItem firstParagraph={"Logoyu Hangi Ülkelerde Kullabilirim ?"} secondParagraph={"Logoyu her ülkede Kullabilirsiniz."}/>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;