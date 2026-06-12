import { useState } from "react";
import "./FooterListItem.css"

const FooterListItem = ({firstParagraph, secondParagraph}) => {
    const [isOpenCloseDiv,setIsOpenCloseDiv] = useState(false);

    return (
        <li className="footer-list-item">
            <div className="first">
                <p>{firstParagraph}</p>
                <i className="bi bi-chevron-down footer-chevron" onClick={(e)=>{
                    if(!isOpenCloseDiv){
                        setIsOpenCloseDiv(true)
                    }
                    else{
                        setIsOpenCloseDiv(false)
                    }
                }}></i>
            </div>
            <div className={`second ${isOpenCloseDiv ? "d-block" : "d-none"}`}>
                <p>{secondParagraph}</p>
            </div>
        </li>
    );
}

export default FooterListItem;