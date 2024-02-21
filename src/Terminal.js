import React, { useEffect, useRef, useState } from 'react';

const Terminal = ({ asciiArts }) => {
    const speeds = [200, 0.1]; // Adjust timings for different ASCII arts
    const terminalRef = useRef();

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);

    useEffect(() => { // Handle terminal's auto scrolling
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }, [asciiArts, index, subIndex, blink]); 

    useEffect(() => { // Handle ASCII arts printing process
        if (asciiArts[index] == null) return;

        const character = asciiArts[index][subIndex];
        const delay = character === " " ? speeds[index]*5 : speeds[index];

        const typewriter = setTimeout(() => {
            if (subIndex < asciiArts[index].length) {
                setSubIndex(prevSubIndex => prevSubIndex + 1);                

                if (index === 0) {
                    setBlink(!blink); 
                }                
            } 
            else {
                setBlink(index === 0);
                setIndex(prevIndex => prevIndex + 1);
                setSubIndex(0);
            }
        }, delay);

        return () => clearTimeout(typewriter);

    }, [subIndex, index, asciiArts, blink]);

    return (
        <div className='terminal' ref={terminalRef}>
            {asciiArts.map((art, arrIndex) => (
                <pre key={arrIndex}>
                    {arrIndex < index 
                        ? art 
                        : (arrIndex === index 
                            ? `${art.slice(0, subIndex)}${blink && index === 0 ? "█" : " "}`
                            : "")
                    }
                </pre>
            ))}
        </div>
    );
};

export default Terminal;

