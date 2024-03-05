
import React from "react";
import Road from '../assets/Road.svg';
import Car from '../assets/Car.jpg';
import Gold from '../assets/Gold.svg';

export const RoadAsset = () => (
  <img src={Road} role='presentation' aria-hidden="true" alt="background" style={{ position: 'absolute', height: '500px', width: '500px' }} />
);

export const CarAsset = ({position}) => (
  <img src={Car} role='img' aria-label='Player Car' alt="Car" style={{position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, zIndex: '1', width: '50px'}} />
);

export const GoldAsset = ({position}) => (
  <img src={Gold} role='img' aria-label='gold-coin' alt="Gold Coin" style={{position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, zIndex: '1', width: '50px'}} />
);
