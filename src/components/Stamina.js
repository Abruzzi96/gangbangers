// src/components/Stamina.js

import React, { useState, useEffect } from 'react';

const Stamina = ({ onStaminaChange }) => {
    const [stamina, setStamina] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setStamina(currentStamina => {
                if (currentStamina < 100) {
                    const newStamina = currentStamina + 5;
                    onStaminaChange(newStamina);
                    return newStamina;
                }
                return currentStamina;
            });
        }, 300000); // 300000 milliseconds = 5 minutes
        return () => clearInterval(interval);
    }, [onStaminaChange]);

    return (
        <p>Stamina: {stamina}</p>
    );
};

export default Stamina;

