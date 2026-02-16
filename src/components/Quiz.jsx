import { useState } from "react";
import { QUESTION_DATA } from "../data-question.js";

export default function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);

    const currentQuestion = QUESTION_DATA[questionIndex];

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