import { useState, useEffect } from "react";
import { QUESTION_DATA } from "../data-question.js";

const timeMaximum = 100;

export default function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(timeMaximum);

    const currentQuestion = QUESTION_DATA[questionIndex];

    useEffect(() => {
        if (timeRemaining <= 0) return;

        const interval = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => Math.max(prevTimeRemaining - 10, 0));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [timeRemaining]);

    useEffect(() => {
        setTimeRemaining(timeMaximum);
    }, [questionIndex]);

    console.log(timeRemaining);

    function handleAnswerClick() {
        if (questionIndex + 1 === QUESTION_DATA.length) {
            setQuestionIndex(0);
        } else {
            setQuestionIndex(questionIndex + 1);
        }
    }

    return (
    <div id="quiz">
        <div id="question">
            <progress value={timeRemaining} max={timeMaximum}></progress>
            {timeRemaining === 0 ? <p>Time's up</p> : <p></p>}
            <h2>{currentQuestion.question}</h2>
        </div>

        <ol id="answers">
            {currentQuestion.answers.map((answer, indexAnswer) => {
                return(<li key={indexAnswer} className="answer"><button onClick={handleAnswerClick}>{answer}</button></li>)
            })}
        </ol>
    </div>
    );
}