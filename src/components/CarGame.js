import React, { useState, useEffect, useRef } from 'react';
import { RoadAsset, CarAsset, GoldAsset } from './Assets';

const CarGame = () => {
  const [gameStart, setGameStart] = useState(false);
  const [score, setScore] = useState(0);
  const [goldPosition, setGoldPosition] = useState({x: 250, y: 0});
  const [carStatus, setCarStatus] = useState({position: {x: 250, y: 450}, direction: null});
  const gameContainer = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37:
          setCarStatus(prevStatus => ({ ...prevStatus, direction: 'left' }));
          break;
        case 39:
          setCarStatus(prevStatus => ({ ...prevStatus, direction: 'right' }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      if (event.keyCode === 37 || event.keyCode === 39) {
        setCarStatus(prevStatus => ({ ...prevStatus, direction: null }));
      }
    };

    // Event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const moveCarInterval = setInterval(() => {
      if (gameStart && carStatus.direction) {
        let newPos = { ...carStatus.position };
        switch (carStatus.direction) {
          case 'left':
            newPos.x = carStatus.position.x > 0 ? carStatus.position.x - 2 : carStatus.position.x;
            break;
          case 'right':
            newPos.x = carStatus.position.x < 500 ? carStatus.position.x + 2 : carStatus.position.x;
            break;
          default:
            break;
        }
        setCarStatus(prevStatus => ({ ...prevStatus, position: newPos }));
      }
    }, 10);

    return () => clearInterval(moveCarInterval);
  }, [carStatus, gameStart]);

  useEffect(() => {
    const goldInterval = setInterval(() => {
      if (gameStart) {
        let y = goldPosition.y < 480 ? goldPosition.y + 5 : 0;
        let x = y === 0 ? Math.floor(Math.random() * 480) : goldPosition.x;
        setGoldPosition({ x: x, y: y });
      }
    }, 100);

    return () => clearInterval(goldInterval);
  }, [goldPosition, gameStart]);

  useEffect(() => {
    if (gameStart) {
      if (Math.abs(carStatus.position.x - goldPosition.x) < 20 &&
          Math.abs(carStatus.position.y - goldPosition.y) < 20) {
        setScore(score => score + 1);
        setGoldPosition({x: Math.floor(Math.random() * 480), y: 0});
      }
    }
  }, [carStatus, gameStart, goldPosition.x, goldPosition.y]);

  return (
    <div
      ref={gameContainer}
      className="App"
      tabIndex={0}
      style={{ position: 'relative', height: '500px', width: '500px', border: '1px solid' }}
    >
      <RoadAsset />
      <CarAsset position={carStatus.position} />
      <GoldAsset position={goldPosition} />
      {!gameStart && (
        <button style={{ position: 'absolute', zIndex: 2 }} onClick={() => setGameStart(true)}>
          Start Game
        </button>
      )}
      {gameStart && (
        <p>
          Score: {score}
        </p>
      )}
    </div>
  );
}

export default CarGame;

