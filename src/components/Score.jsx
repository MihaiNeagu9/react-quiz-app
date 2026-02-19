import { QUESTION_DATA } from "../data-question.js";
import { CORRECT_ANSWERS } from "../data-question.js";

export default function Score({ userAnswers }) {
    const totalAnswers = QUESTION_DATA.length;

    if (totalAnswers === 0) {
        return null;
    }

    const correctAnswers = userAnswers.filter((answer, answerIndex) => 
        {return answer === CORRECT_ANSWERS[answerIndex]});
    const skippedAnswers = userAnswers.filter((answer) => {return answer === undefined});

    const procentCorrect = Math.round((correctAnswers.length / totalAnswers) * 100);
    const procentSkipped = Math.round((skippedAnswers.length / totalAnswers) * 100);
    const procentIncorrect = Math.round(((totalAnswers - (correctAnswers.length + skippedAnswers.length)) / totalAnswers) * 100);

    return (
    <div id="summary-stats">
        <div>
            <p className="number">{procentSkipped}%</p>
            <p className="text">Skipped</p>
        </div>
        <div>
            <p className="number">{procentCorrect}%</p>
            <p className="text">ANSWERED CORRECTLY</p>
        </div>
        <div>
            <p className="number">{procentIncorrect}%</p>
            <p className="text">ANSWERED INCORRECTLY</p>
        </div>
    </div>
    );
}