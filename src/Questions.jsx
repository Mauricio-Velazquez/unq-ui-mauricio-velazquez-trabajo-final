import React from 'react';

export const Questions = ({ question, onAnswer, selectedAnswer, showResult, isCorrect, difficulty }) => {
    if (!question) return <div className="loader">Cargando tarjeta...</div>;

    const optionKeys = ['option1', 'option2', 'option3', 'option4'];
    const validKeys = optionKeys.filter(key => question[key]);

    return (
        <div className="question-card">

            <div className="question-header">
                <span className="difficulty-tag-question"> {difficulty || "Global"} </span>

                <h2 className="question-text">
                    {question.question}
                </h2>
            </div>

            <div className="options-grid">
                {validKeys.map((key) => (
                    <button
                        key={key}
                        onClick={() => onAnswer(question.id, key)}
                        className={
                            "option-box " +
                            (showResult
                                ? key === selectedAnswer
                                    ? isCorrect
                                        ? "option-correct"
                                        : "option-incorrect"
                                    : "option-disabled"
                                : "")
                        }
                        disabled={showResult}
                    >
                        {question[key]}
                    </button>
                ))}
            </div>
        </div>
    );
};
