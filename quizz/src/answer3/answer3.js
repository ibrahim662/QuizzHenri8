import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Answer3() {
  const [error, setError] = useState(null);
  const [ques, setQues] = useState([]);

  const [showAnswer1, setAnswer1] = useState([]);
  const [showAnswer2, setAnswer2] = useState([]);
  const [showAnswer3, setAnswer3] = useState([]);
  const [showAnswer4, setAnswer4] = useState([]);

  // get localstorage answers

  useEffect(() => {
    const answer1 = localStorage.getItem("AnswerQ3R1");
    const answer2 = localStorage.getItem("AnswerQ3R2");
    const answer3 = localStorage.getItem("AnswerQ3R3");
    const answer4 = localStorage.getItem("AnswerQ3R4");
    if (answer1) {
      const foundAnswer1 = JSON.parse(answer1);
      const foundAnswer2 = JSON.parse(answer2);
      const foundAnswer3 = JSON.parse(answer3);
      const foundAnswer4 = JSON.parse(answer4);
      setAnswer1(foundAnswer1);
      setAnswer2(foundAnswer2);
      setAnswer3(foundAnswer3);
      setAnswer4(foundAnswer4);
    }
  }, []);
  //----------------------------------

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
  //-----------------------------------------

  // Clear Localstorage

  const DeleteSave = () => {
    localStorage.removeItem("AnswerQ3R1");
    localStorage.removeItem("AnswerQ3R2");
    localStorage.removeItem("AnswerQ3R3");
    localStorage.removeItem("AnswerQ3R4");
    window.location.href = "/";
  };

  //-----------------------------------------
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      {ques.map((question) => (
        <div>
          <div className="header">
            <h1 className="title">{question[2].questionText3}</h1>
            <hr className="line"></hr>
            <br></br>
            <div className="links"></div>
          </div>
          <Bar
            data={{
              labels: [
                `${question[2].answr3.answer1} 😭`,
                `${question[2].answr3.answer2} 😐`,
                `${question[2].answr3.answer3} 🙂`,
                `${question[2].answr3.answer4} 😃`,
              ],
              datasets: [
                {
                  label: "# personne a repondu",

                  data: [showAnswer1, showAnswer2, showAnswer3, showAnswer4],
                  backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={options}
            width={50}
            height={10}
          />
          <br></br>
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
    </>
  );
}
