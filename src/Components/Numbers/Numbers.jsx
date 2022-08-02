import "./Numbers.css"
import leftImg from "../../Assets/Img/number1.png"

const Numbers = ()=>{
return(
<section className="numbers">
    <div className="container">

        <div className="numbers-header">
            <h2 className="numbers-title">
                Мы в числа
            </h2>
        </div>

        <div className="numbers-medium">
            <ul className="numbers-list">
                <li className="numbers-item">
                    <p className="numbers-num">
                        896
                    </p>
                </li>
                <li className="numbers-item">
                    <p className="numbers-num">
                        2560
                    </p>
                </li>
                <li className="numbers-item">
                    <p className="numbers-num">
                        407
                    </p>
                </li>

                <li className="numbers-item">
                    <p className="numbers-num">
                        1080
                    </p>
                </li>
            </ul>

        </div>
        <div className="numbers-bottom">
            <div className="numbers-left">
                <img src={leftImg} alt="" className="numbers-img" />
            </div>
            <div className="numbers-right">
                <p className="numbers-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing penatibus ornare Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Adipiscing penatibus ornare Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. penatibus ornare Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                </p>
            </div>
        </div>
    </div>
</section>
)
}

export default Numbers;