import { useState } from "react";
import { QUESTION_DATA } from "./data-question.js";

import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import Summary from "./components/Summary.jsx";

function App() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    function handleAnswerClick(answer) {
        setUserAnswers((prevUserAnswers) => { return [...prevUserAnswers, answer]});
        setQuestionIndex(questionIndex + 1);
        return questionIndex;
    }

    console.log(userAnswers);

    const quizIsComplete = userAnswers.length === QUESTION_DATA.length;

    return (
        <>
        <Header />

        {quizIsComplete ? <Summary userAnswers={userAnswers} /> : <Quiz onAnswerClick={handleAnswerClick} questionIndex={questionIndex} />}
        </>
    );
}

export default App;
