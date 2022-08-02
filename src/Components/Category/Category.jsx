import React, { useEffect, useState } from "react";
import "./Category.css";

import line from "../../Assets/Img/line.png";
import plus from "../../Assets/Img/plus.png";
import matras from "../../Assets/Img/matras.png";
import { Link } from "react-router-dom";

const Category = (props) => {
  const [selected, setSelected] = useState(null);

  function toggler(i) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://api.alibaraka.com/api/questions/")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://93.189.40.27:2200/products/?format=json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="category">
      <div className="container">
        <div className="category-blok">
          <div className="category-left">
            <div className="details">
              {faqArray.length > 0 && (
                <ul
                  className={`faq_list ${
                    props.className ? props.className : ""
                  }`}
                >
                  {faqArray.map((question, i) => (
                    <li
                      key={i}
                      className="faq_list__item"
                      onClick={() => toggler(i)}
                    >
                      <div className="text_wrap faq_list__item__question_wrapper">
                        <h4 className="faq_header">{question.question}</h4>

                        <span
                          className={`icon ${
                            selected === i ? "closer" : "opener"
                          }`}
                        >
                          +
                        </span>
                      </div>
                      <div
                        className={`text_wrap ${
                          selected === i
                            ? "faq_list__item__answer_wrapper show"
                            : "faq_list__item__answer_wrapper"
                        }`}
                      >
                        <p className="faq_text">{question.answer}</p>
                        <p className="faq_text">{question.answer}</p>{" "}
                        <p className="faq_text">{question.answer}</p>{" "}
                        <p className="faq_text">{question.answer}</p>{" "}
                        <p className="faq_text">{question.answer}</p>{" "}
                        <p className="faq_text">{question.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="category-right">
            <h3 className="category-names">Бязь</h3>

            <div className="category-box">
              {data &&
                data.map((e) => (
                  <Link
                    to={`/productaboutpage${e.id}`}
                    className="category-card"
                  >
                    <div className="category-images">
                      <img src={e.image1} alt="" className="category-img" />
                    </div>
                    <p className="category-text">{e.name_en}</p>
                    <div className="category-titles">
                      <p className="category-numbers">
                        $ {e.cost}
                        <span>/m</span>
                      </p>
                      <button className="category-button">Заказать</button>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;

const faqArray = [
  {
    category: "Tkani",
    question: " I register?",
    answer: "Do you  ",
  },
  {
    question: "prices?",
    answer: "Lorem et ",
  },
  {
    question: " I canc ?",
    answer: "Lorem ip i!",
  },
  {
    question: "   stions?",
    answer: " lit. Vo gendi!",
  },
  {
    question: "Hcy orders?",
    answer: "Lorem ipd!",
  },
  {
    question: "Hods?",
    answer: "Lorem ipsd!",
  },
  {
    question: "How c orders?",
    answer: " eligendi!",
  },
];
