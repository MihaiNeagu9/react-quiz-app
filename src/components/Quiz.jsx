import { useState, useEffect } from "react";
import { QUESTION_DATA } from "../data-question.js";

const timeMaximum = 100;

export default function Quiz({ onAnswerClick, userAnswers }) {
    const [timeRemaining, setTimeRemaining] = useState(timeMaximum);

    const currentQuestion = QUESTION_DATA[userAnswers.length];

    useEffect(() => {
        if (timeRemaining <= 0) {
            onAnswerClick(undefined);
            return;
        };

        const interval = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => Math.max(prevTimeRemaining - 10, 0));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [timeRemaining]);

    useEffect(() => {
        setTimeRemaining(timeMaximum);
    }, [userAnswers.length]);

    console.log(timeRemaining);

    return (
    <div id="quiz">
        <div id="question">
            <progress value={timeRemaining} max={timeMaximum}></progress>
            {timeRemaining === 0 ? <p>Time's up</p> : <p></p>}
            <h2>{currentQuestion.question}</h2>
        </div>

        <ol id="answers">
            {currentQuestion.answers.map((answer) => {
                return(<li key={answer} className="answer"><button onClick={() => onAnswerClick(answer)}>{answer}</button></li>)
            })}
        </ol>
    </div>
    );
}