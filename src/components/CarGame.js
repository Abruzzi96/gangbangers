import React, { useState, useEffect } from "react";

const CarGame = () => {
  const [score, setScore] = useState(0);
  const [carPosition, setCarPosition] = useState({x: 50, y: 50});
  const [goldPosition, setGoldPosition] = useState({x: 200, y: 200});

  useEffect(() => {
    function handleArrowKey(event) {
      if([37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
        let newPos = {...carPosition};

        switch(event.keyCode) {
        case 37: // left arrow key
          newPos.x = carPosition.x > 10 ? carPosition.x - 10 : 0;
          break;
        case 39: // right arrow key
          newPos.x = carPosition.x < 440 ? carPosition.x + 10 : 450;
          break;
        case 38: // up arrow key
          newPos.y = carPosition.y > 10 ? carPosition.y - 10 : 0;
          break;
        case 40: // down arrow key
          newPos.y = carPosition.y < 440 ? carPosition.y + 10 : 450;
        }

        setCarPosition(newPos);
      }
    }

    window.addEventListener('keydown', handleArrowKey);

    return () => window.removeEventListener('keydown', handleArrowKey);
  }, [carPosition]);

  useEffect(() => {
    if(Math.abs(carPosition.x - goldPosition.x) < 10 && Math.abs(carPosition.y - goldPosition.y) < 10) {
      setScore(score => score + 1);
      setGoldPosition({
        x: Math.random() * 450,
        y: Math.random() * 450
      });
    }
  }, [carPosition]);

  return (
    <div className="App" style={{position: 'relative', height: '500px', width: '500px', border: '1px solid'}}>
      <div role="img" aria-label="Car Game" style={{position: 'absolute', left: `${carPosition.x}px`, top: `${carPosition.y}px`}}>
        🚗
      </div>
      <div role="img" aria-label="Gold" style={{position: 'absolute', left: `${goldPosition.x}px`, top: `${goldPosition.y}px`}}>
        🪙
      </div>
      <p>Score: {score}</p>
    </div>
  );
}

export default CarGame;

