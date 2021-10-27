import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Answer1() {
  const [error, setError] = useState(null);
  const [ques, setQues] = useState([]);

  const [showAnswer1, setAnswer1] = useState([]);
  const [showAnswer2, setAnswer2] = useState([]);

  // Clear Localstorage

  const DeleteSave = () => {
    localStorage.removeItem("AnswerQ1R1");
    localStorage.removeItem("AnswerQ1R2");
    window.location.href = "/";
  };

  //---------------------------

  // get localstorage answers

  useEffect(() => {
    const answer1 = localStorage.getItem("AnswerQ1R1");
    const answer2 = localStorage.getItem("AnswerQ1R2");
    if (answer1) {
      const foundAnswer1 = JSON.parse(answer1);
      const foundAnswer2 = JSON.parse(answer2);
      setAnswer1(foundAnswer1);
      setAnswer2(foundAnswer2);
    }

    //-----------------------------------------
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/questions" /*, requestOptions*/, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then(response => response.text())
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));
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

  const asnwer1 = showAnswer1;
  const asnwer2 = showAnswer2;

  return (
    <div className="center">
      {ques.map((question) => (
        <div>
          <h3>Q1/ {question[0].questionText}</h3>
          <hr className="line"></hr>
          <br></br>
          <div style={{ width: 1000 }}>
            <p>
              1. {question[0].answr1.answer1.answer1} {asnwer1}%
            </p>
            <ProgressBar variant="black" now={asnwer1} label={`${asnwer1}%`} />
            <br></br>
            <p>
              1. {question[0].answr1.answer1.answer2} {asnwer2}%
            </p>
            <ProgressBar variant="black" now={asnwer2} label={`${asnwer2}%`} />
            <br></br>
          </div>
          <h3 className="text-center">
            La bonne réponse est {question[0].answr1.answer1.answer1}
          </h3>
          <Button className="btnR" onClick={DeleteSave}>
            <span className="TxtR">réinitialiser vos sauvegardes</span>
          </Button>
          OU
          <Button className="btnR">
            <Link to="/">
              <span className="TxtR">Revenir a l'accueil</span>
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
