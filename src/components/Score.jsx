import { QUESTION_DATA } from "../data-question.js";

export default function Score() {
    const totalAnswers = QUESTION_DATA.length;

    // const procentCorrect = (numberCorrectAnswers / totalAnswers) * 100;
    // const procentIncorrect = ((totalAnswers - numberCorrectAnswers) / totalAnswers) * 100;
    // const procentSkipped = (numberSkippedAnswers / totalAnswers) * 100;

    return (
    <div id="summary-stats">
        <div>
            <p className="number">0%</p>
            <p className="text">Skipped</p>
        </div>
        <div>
            <p className="number">43%</p>
            <p className="text">ANSWERED CORRECTLY</p>
        </div>
        <div>
            <p className="number">57%</p>
            <p className="text">ANSWERED INCORRECTLY</p>
        </div>
    </div>
    );
}