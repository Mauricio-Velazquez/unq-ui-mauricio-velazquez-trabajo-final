import React, { useState } from "react";
import { Difficulty } from "./Difficulty.jsx";
import { Questions } from "./Questions.jsx";
import { getQuestions, checkAnswer } from "./api.js";
import logo from "./assets/logo.png";

function App() {

    const [phase, setPhase] = useState("START");
    const [questionList, setQuestionList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [loadingAnswer, setLoadingAnswer] = useState(false);
    const [picked, setPicked] = useState(null);
    const [answerState, setAnswerState] = useState(null);
    const [currentDifficulty, setCurrentDifficulty] = useState(null);

    const startGame = async (difficultyChosen) => {
        setCurrentDifficulty(difficultyChosen);
        setPhase("FETCHING");

        try {
            const data = await getQuestions(difficultyChosen);

            setQuestionList(data);
            setActiveIndex(0);
            setCorrectCount(0);

            setPhase("IN_GAME");
        } catch (err) {
            console.error("Error cargando preguntas:", err);
            setPhase("START");
        }
    };

    const handleAnswer = async (questionId, option) => {
        if (loadingAnswer) return;

        setPicked(option);
        setLoadingAnswer(true);

        try {
            const result = await checkAnswer(questionId, option);
            const wasCorrect = result.answer;

            setAnswerState(wasCorrect);

            setTimeout(() => {
                if (wasCorrect) {
                    setCorrectCount((prev) => prev + 1);

                    const next = activeIndex + 1;

                    if (next < questionList.length) {
                        setActiveIndex(next);
                        setPicked(null);
                        setAnswerState(null);
                        setLoadingAnswer(false);
                    } else {
                        setPhase("COMPLETE");
                        setLoadingAnswer(false);
                    }
                } else {
                    setPhase("FAIL");
                    setLoadingAnswer(false);
                }
            }, 1400);
        } catch (err) {
            console.error("Error evaluando respuesta:", err);
            setLoadingAnswer(false);
        }
    };

    const resetToMenu = () => {
        setPhase("START");
        setQuestionList([]);
        setCorrectCount(0);
        setPicked(null);
        setAnswerState(null);
        setActiveIndex(0);
    };

    return (
        <div className="app-container">

            <div className="header">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Preguntados</h1>

                {phase === "IN_GAME" && (
                    <span className="score-tag">Aciertos: {correctCount}</span>
                )}
            </div>

            {phase === "START" && (
                <Difficulty onSelect={startGame} />
            )}

            {phase === "FETCHING" && (
                <div className="loader">Cargando preguntas...</div>
            )}

            {phase === "IN_GAME" && questionList.length > 0 && (
                <Questions
                    question={questionList[activeIndex]}
                    onAnswer={handleAnswer}
                    showResult={answerState !== null}
                    selectedAnswer={picked}
                    isCorrect={answerState}
                    difficulty={currentDifficulty}
                />
            )}

            {phase === "FAIL" && (
                <div className="result-screen lose">
                    <h2>❌ ¡Fallaste!</h2>
                    <p>No pasa nada, probá de nuevo.</p>

                    <div className="final-score">Total de aciertos: {correctCount}</div>

                    <button className="btn-action" onClick={resetToMenu}>
                        Volver al menú
                    </button>
                </div>
            )}

            {phase === "COMPLETE" && (
                <div className="result-screen win">
                    <h2>🏆 ¡Juego completado!</h2>
                    <p>¡Excelente trabajo!</p>

                    <div className="final-score">Puntaje perfecto: {correctCount}</div>

                    <button className="btn-action" onClick={resetToMenu}>
                        Jugar otra vez
                    </button>
                </div>
            )}

        </div>
    );
}

export default App;
