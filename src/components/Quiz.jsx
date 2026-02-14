import { QUESTION_DATA } from "../data-question.js";

export default function Quiz() {
    const currentQuestion = QUESTION_DATA[0];

    return (
    <div id="quiz">
        <div id="question">
            <h2>{currentQuestion.question}</h2>
        </div>

        <ol id="answers">
            {currentQuestion.answers.map((answer, indexAnswer) => {
                return(<li key={indexAnswer} className="answer"><button>{answer}</button></li>)
            })}
        </ol>
    </div>
    );
}