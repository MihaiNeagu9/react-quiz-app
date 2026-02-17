import quizComplete from "../assets/quiz-complete.png";

export default function Summary() {
    return (
        <div id="summary">
            <img src={quizComplete} alt="Quiz Complete Trophy" />
            <h2>Quiz Completed!</h2>
            <ol>
                <li>
                    <h3>1</h3>
                    <p className="question">What is the capital city of Canada?</p>
                    <p className="user-answer">User Answer</p>
                </li>
                <li>
                    <h3>2</h3>
                    <p className="question">Which planet is known as the Red Planet?</p>
                    <p className="user-answer">User Answer</p>
                </li>
                <li>
                    <h3>3</h3>
                    <p className="question">Who wrote the play 'Romeo and Juliet'?</p>
                    <p className="user-answer">User Answer</p>
                </li>
            </ol>
        </div>
    );
}