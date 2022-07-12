import React, { FC } from 'react';
import './styles.css';

interface HeroProps {
  image: string;
}

export const Hero: FC<HeroProps> = ({ image }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url("/images/${image}")` }} />
  )
}