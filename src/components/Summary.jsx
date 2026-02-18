import quizComplete from "../assets/quiz-complete.png";
import { QUESTION_DATA } from "../data-question.js";

export default function Summary({ userAnswers }) {
    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz Complete Trophy" />
            <h2>Quiz Completed!</h2>
            <ol>
                {userAnswers.map((answer, indexAnswer) => {
                    return (<li key={indexAnswer}>
                        <h3>{indexAnswer + 1}</h3>
                        <p className="question">{QUESTION_DATA[indexAnswer].question}</p>
                        <p className="user-answer">{answer}</p>
                    </li>);
                })}
            </ol>
        </div>
    );
}