import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [ques, setQues] = useState([]);
  const [error, setError] = useState(null);

  // Store answers of question 1 in localstorage

  const storedValueAsNumberQ1R1 = Number(localStorage.getItem("AnswerQ1R1"));
  const [countQ1R1, setCountQ1R1] = useState(
    storedValueAsNumberQ1R1 ? storedValueAsNumberQ1R1 : 0
  );

  useEffect(() => {
    localStorage.setItem("AnswerQ1R1", Number(countQ1R1));
  }, [countQ1R1]);

  const storedValueAsNumberQ1R2 = Number(localStorage.getItem("AnswerQ1R2"));
  const [countQ1R2, setCountQ1R2] = useState(
    storedValueAsNumberQ1R2 ? storedValueAsNumberQ1R2 : 0
  );

  useEffect(() => {
    localStorage.setItem("AnswerQ1R2", Number(countQ1R2));
  }, [countQ1R2]);

  // ----------------------------------------------------------------

  // Store answers of question 2 in localstorage
  const storedValueAsNumber = Number(localStorage.getItem("Answer1"));
  const [countAn1, setCountAn1] = useState(
    storedValueAsNumber ? storedValueAsNumber : 0
  );

  useEffect(() => {
    localStorage.setItem("Answer1", Number(countAn1));
  }, [countAn1]);
  const storedValueAsNumber2 = Number(localStorage.getItem("Answer2"));
  const [countAn2, setCountAn2] = useState(
    storedValueAsNumber2 ? storedValueAsNumber2 : 0
  );

  useEffect(() => {
    localStorage.setItem("Answer2", Number(countAn2));
  }, [countAn2]);

  const storedValueAsNumber3 = Number(localStorage.getItem("Answer3"));
  const [countAn3, setCountAn3] = useState(
    storedValueAsNumber3 ? storedValueAsNumber3 : 0
  );

  useEffect(() => {
    localStorage.setItem("Answer3", Number(countAn3));
  }, [countAn3]);

  // ----------------------------------------------------------------

  // Store answers of question 3 in localstorage

  const storedValueAsNumberQ3R1 = Number(localStorage.getItem("AnswerQ3R1"));
  const [countQ3R1, setCountQ3R1] = useState(
    storedValueAsNumberQ3R1 ? storedValueAsNumberQ3R1 : 0
  );

  useEffect(() => {
    localStorage.setItem("AnswerQ3R1", Number(countQ3R1));
  }, [countQ3R1]);

  const storedValueAsNumberQ3R2 = Number(localStorage.getItem("AnswerQ3R2"));
  const [countQ3R2, setCountQ3R2] = useState(
    storedValueAsNumberQ3R2 ? storedValueAsNumberQ3R2 : 0
  );

  useEffect(() => {
    localStorage.setItem("AnswerQ3R2", Number(countQ3R2));
  }, [countQ3R2]);

  const storedValueAsNumberQ3R3 = Number(localStorage.getItem("AnswerQ3R3"));
  const [countQ3R3, setCountQ3R3] = useState(
    storedValueAsNumberQ3R3 ? storedValueAsNumberQ3R3 : 0
  );

  useEffect(() => {
    localStorage.setItem("AnswerQ3R3", Number(countQ3R3));
  }, [countQ3R3]);

  const storedValueAsNumberQ3R4 = Number(localStorage.getItem("AnswerQ3R4"));
  const [countQ3R4, setCountQ3R4] = useState(
    storedValueAsNumberQ3R4 ? storedValueAsNumberQ3R4 : 0
  );

  useEffect(() => {
    localStorage.setItem("AnswerQ3R4", Number(countQ3R4));
  }, [countQ3R4]);

  // ----------------------------------------------------------------

  //check the correct answer
  const handleAnswerBtn = (isCorrect) => {
    if (isCorrect === true) {
      alert("Bravo !! c'est la bonne réponse ");
    } else {
      alert("Ah mince, tu peux faire mieux :D");
    }
  };

  // -----------------------------------------------------------------
  const [active, setActive] = useState("FirstAnswer");
  const [active2, setActive2] = useState("SecondAnswer");
  const [active3, setActive3] = useState("ThirdAnswer");

  //fetching questions
  useEffect(() => {
    fetch("http://localhost:5000/questions" /*, requestOptions*/, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setQues([result]);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setError(error);
          console.log(error);
        }
      );
  }, []);

  // ---------------------------------------------------------------------

  // display questions and answers before replying
  useEffect(() => {
    setActive("FirstAnswer");
    setActive2("SecondAnswer");
    setActive3("ThirdAnswer");
  }, []);

  // -----------------------------------------------------------------------

  return (
    <div>
      {ques.map((question) => (
        // question number 1  -----------------------
        <div key={question}>
          {active === "FirstAnswer" && (
            <div>
              <h3>Q1/ {question[0].questionText}</h3>
              <hr className="line"></hr>
              <button
                className="btn1"
                onClick={() => {
                  handleAnswerBtn(question[0].answr1.answer1.isCorrect);
                  setActive("CorrectAnswer");
                  setCountQ1R1((f) => f + 1);
                }}
              >
                {question[0].answr1.answer1.answer1}
              </button>
              <button
                className="btn1"
                onClick={() => {
                  handleAnswerBtn(question[0].answr1.answer2.isCorrect);
                  setActive("CorrectAnswer");
                  setCountQ1R2((z) => z + 1);
                }}
              >
                {question[0].answr1.answer2.answer2}
              </button>
            </div>
            // --------------------------------------------------------
          )}
          {active === "CorrectAnswer" && (
            // display the correct answer of question number 1
            <div>
              <h3>Q1/ {question[0].questionText}</h3>
              <hr className="line"></hr>
              <button
                className="btn1Correct"
                onClick={() => {
                  handleAnswerBtn(question[0].answr1.answer1.isCorrect);
                }}
              >
                {question[0].answr1.answer1.answer1}
              </button>
              <button
                className="btn1false"
                onClick={() => {
                  handleAnswerBtn(question[0].answr1.answer2.isCorrect);
                }}
              >
                {question[0].answr1.answer2.answer2}
              </button>
              <br></br>
              <button className="btnR">
                {" "}
                <Link to="/answer1">
                  <span className="TxtR">Voir les moyenne des réponses</span>
                </Link>
              </button>
            </div>
            // ---------------------------------------------------------
          )}

          {active2 === "SecondAnswer" && (
            // question number 2  -----------------------
            <div>
              <h1>Q2/ {question[1].questionText2}</h1>
              <hr className="line"></hr>
              <button
                className="btn2"
                onClick={() => {
                  handleAnswerBtn(question[1].answr2.answer1.isCorrect);
                  setActive2("CorrectAnswer2");
                  setCountAn1((c) => c + 1);
                }}
              >
                1. {question[1].answr2.answer1.answer1}
              </button>
              <br></br>
              <button
                className="btn2"
                onClick={() => {
                  handleAnswerBtn(question[1].answr2.answer2.isCorrect);
                  setActive2("CorrectAnswer2");
                  setCountAn2((b) => b + 1);
                }}
              >
                2. {question[1].answr2.answer2.answer2}
              </button>
              <br></br>
              <button
                className="btn2"
                onClick={() => {
                  handleAnswerBtn(question[1].answr2.answer3.isCorrect);
                  setActive2("CorrectAnswer2");
                  setCountAn3((d) => d + 1);
                }}
              >
                3. {question[1].answr2.answer3.answer3}
              </button>
            </div>

            // --------------------------------------------------------
          )}

          {active2 === "CorrectAnswer2" && (
            // display the correct answer of question number 2
            <div>
              <h1>Q2/ {question[1].questionText2}</h1>
              <hr className="line"></hr>
              <button className="btn2false">
                1. {question[1].answr2.answer1.answer1}
              </button>
              <br></br>
              <button className="btn2correct">
                2. {question[1].answr2.answer2.answer2}
              </button>
              <br></br>
              <button className="btn2false">
                3. {question[1].answr2.answer3.answer3}
              </button>
              <br></br>
              <button className="btnR">
                {" "}
                <Link to="/answer2">
                  <span className="TxtR">Voir les moyenne des réponses</span>
                </Link>
              </button>
            </div>
            // --------------------------------------------------------
          )}

          {active3 === "ThirdAnswer" && (
            // question number 2  -----------------------
            <div>
              <h1>Q3/ {question[2].questionText3}</h1>

              <hr className="line"></hr>

              <div className="bg">
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                    setCountQ3R1((b) => b + 1);
                  }}
                >
                  {question[2].answr3.answer1}
                </button>
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                    setCountQ3R2((b) => b + 1);
                  }}
                >
                  {question[2].answr3.answer2}
                </button>
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                    setCountQ3R3((b) => b + 1);
                  }}
                >
                  {question[2].answr3.answer3}
                </button>
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                    setCountQ3R4((b) => b + 1);
                  }}
                >
                  {question[2].answr3.answer4}
                </button>
              </div>
            </div>
            // --------------------------------------------------------
          )}
          {active3 === "CorrectAnswer3" && (
            // display the correct answer of question number 2
            <div>
              <h1>Q3/ {question[2].questionText3}</h1>

              <hr className="line"></hr>

              <div className="bg">
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                  }}
                >
                  {question[2].answr3.answer1}
                </button>
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                  }}
                >
                  {question[2].answr3.answer2}
                </button>
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                  }}
                >
                  {question[2].answr3.answer3}
                </button>
                <button
                  className="btn3"
                  onClick={() => {
                    setActive3("CorrectAnswer3");
                  }}
                >
                  {question[2].answr3.answer4}
                </button>
              </div>
              <button className="btnR">
                {" "}
                <Link to="/answer3">
                  <span className="TxtR">Voir les moyenne des réponses</span>
                </Link>
              </button>
            </div>
          )}
        </div>
        // --------------------------------------------------------
      ))}
    </div>
  );
}
