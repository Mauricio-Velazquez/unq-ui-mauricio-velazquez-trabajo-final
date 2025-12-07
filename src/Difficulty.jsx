import React, { useState, useEffect } from 'react';
import { getDifficulties } from './api.js';

export const Difficulty = ({ onSelect }) => {

    const [levels, setLevels] = useState([]);

    useEffect(() => {
        async function loadLevels() {
            const data = await getDifficulties();
            setLevels(data);
        }
        loadLevels();
    }, []);

    return (
        <div className="difficulty-wrapper">
            <h2>Elegí la dificultad:</h2>

            {levels.map((level) => (
                <button
                    key={level}
                    onClick={() => onSelect(level)}
                    className="btn-difficulty"
                >
                    {level}
                </button>
            ))}
        </div>
    );
};
