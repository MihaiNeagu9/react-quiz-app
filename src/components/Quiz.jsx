import { useState, useEffect } from "react";
import { QUESTION_DATA } from "../data-question.js";

const TIME_LIMIT = 10000; // 10 s

export default function Quiz({ onAnswerClick, userAnswers }) {
    const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);

    const currentQuestion = QUESTION_DATA[userAnswers.length];

    let progressClass = "";
    if (timeRemaining <= 2000) {
        progressClass = "danger";
    } else if (timeRemaining <= 6000) {
        progressClass = "warning";
    }

    useEffect(() => {
        const endTime = Date.now() + TIME_LIMIT;
        let animationFrameId;

        const tick = () => {
            const remaining = Math.max(endTime - Date.now(), 0);
            setTimeRemaining(remaining);

            if (remaining === 0) {
                onAnswerClick(undefined);
                return;
            };

            animationFrameId = requestAnimationFrame(tick);
        };

        animationFrameId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(animationFrameId);
        }

    }, [userAnswers.length]);

    return (
    <div id="quiz">
        <div id="question">
            <progress className={progressClass} value={timeRemaining} max={TIME_LIMIT}></progress>
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