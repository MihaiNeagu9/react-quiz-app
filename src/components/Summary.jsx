import quizComplete from "../assets/quiz-complete.png";
import { QUESTION_DATA } from "../data-question.js";
import { CORRECT_ANSWERS } from "../data-question.js";

import Score from "./Score.jsx";

export default function Summary({ userAnswers }) {
    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz Complete Trophy" />
            <h2>Quiz Completed!</h2>
            <Score userAnswers={userAnswers} />
            <ol>
                {userAnswers.map((answer, indexAnswer) => {
                    return (<li key={indexAnswer}>
                        <h3>{indexAnswer + 1}</h3>
                        <p className="question">{QUESTION_DATA[indexAnswer].question}</p>
                        <p className={answer === CORRECT_ANSWERS[indexAnswer] ? "user-answer correct" : "user-answer wrong"}>{answer ?? "No answer"}</p>
                    </li>);
                })}
            </ol>
        </div>
    );
}