// src/components/Robbery.js

import React, { useState } from 'react';
import Stamina from './Stamina';

const Robbery = () => {
    const [money, setMoney] = useState(0);
    const [exp, setExp] = useState(0);
    const [status, setStatus] = useState('Plan your next heist!');
    const [stamina, setStamina] = useState(100);

    const handleRobbery = () => {
        if (stamina >= 20) {
            setStatus('Heist in progress...');
            setStamina(stamina - 20);
            setTimeout(() => {
                const earnedMoney = 50000;
                const earnedExp = 120;
                setMoney(money + earnedMoney);
                setExp(exp + earnedExp);
                setStatus(`Heist successful! You earned $${earnedMoney} and ${earnedExp} EXP.`);
            }, 2000);
        } else {
            setStatus('Not enough stamina for a heist.');
        }
    };

    return (
        <div className="container" role="main" aria-live="polite">
            <h1>Robbery Page</h1>
            <p id="statusMessage">{status}</p>
            <Stamina onStaminaChange={setStamina} />
            <p>Money: ${money}</p>
            <p>EXP: {exp}</p>
            <button onClick={handleRobbery} aria-controls="statusMessage" disabled={stamina < 20}>
                Start Heist
            </button>
        </div>
    );
};

export default Robbery;

