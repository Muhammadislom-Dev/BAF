import "./Header.css";
import down from "../../Assets/Img/down.pdf"
import headerImg from "../../Assets/Img/headerImg.png"
import downloadIcon from "../../Assets/Img/Group5.svg"
import ytbIcon from "../../Assets/Img/Shape.svg";
import headerBg from "../../Assets/Img/bg1.png";
import { useTranslation } from 'react-i18next';


const Header = ({change1, change2, change3}) =>{

    
    const { t } = useTranslation();

return(
<header className="header">
    <div className="container">
        <div className="header-left">
            <h1 className="header-title">
                Произ
                -водство
                тканей  </h1>
            <p className="header-text">
                востребованное направление
                бизнеса
            </p>
            <div className="header-btns">
            <div className="download-box">    <a href={down} download className="download-btn">
                    Скачать каталог
                </a>
                <div className="download-blok">
                    <img src={downloadIcon} alt="" className="download-icon" />
                </div>
                </div>
                <div className="ytb-box">          
                      <button className="ytb-btn">
                    Смотреть ролик

                </button>
                <div className="ytb-blok">
                    <img src={ytbIcon} alt="" className="ytb-icon" />
                </div>
                </div>

            </div>
        </div>
        <div className="header-right">
            <div className="header-box">
                <img src={headerBg} alt=""
                 className="header-bg" />
            <img src={headerImg} alt="" className="header-img" />
            </div>
            <div className="lang-box">
                <ul className="lang-list">
                    <li className="lang-item">
                        <button onClick={() => change1(true)} className="lang-btn">
                                RU
                        </button>
                    </li>
                    <li className="lang-item">
                        <button onClick={() => change3(true)} className="lang-btn">
                                UZ
                        </button>
                    </li>
                    <li className="lang-item">
                        <button onClick={() => change2(true)} className="lang-btn">
                                EN
                        </button>
                    </li>

                </ul>

            </div>
        </div>
    </div>
</header>
)
}

export default Header;