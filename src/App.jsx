import { useState } from "react";
import { QUESTION_DATA } from "./data-question.js";

import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import Summary from "./components/Summary.jsx";

function App() {
    const [userAnswers, setUserAnswers] = useState([]);

    const quizIsComplete = userAnswers.length === QUESTION_DATA.length;

    return (
        <>
        <Header />

        {quizIsComplete ? <Summary /> : <Quiz />}
        </>
    );
}

export default App;
