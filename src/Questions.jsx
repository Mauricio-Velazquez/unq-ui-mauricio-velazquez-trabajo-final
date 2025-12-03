import React from 'react';

export const Questions = ({ question, onAnswer, selectedAnswer, showResult, isCorrect, difficulty }) => {
    if (!question) return <div className="loader">Cargando tarjeta...</div>;

    const optionKeys = ['option1', 'option2', 'option3', 'option4'];
    const validKeys = optionKeys.filter(key => question[key]);

    return (
        <div className="question-card">

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{
                    alignSelf: 'center',
                    background: 'blue',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '10px',
                    textTransform: 'uppercase'
                }}>
                    {difficulty || "Global"}
                </span>

                <h2 style={{ textAlign: 'center', fontSize: '1.4rem', color: '#2d3436' }}>
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


