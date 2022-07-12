import React, { FC } from 'react';
import './styles.css';

export interface CardProps {
  title: string;
  children: JSX.Element,
  className?: string;
  theme?: 'white' | 'blue' | 'orange' | 'orange-dark' | 'orange-mixed'
}

export const Card: FC<CardProps> = ({ title, children, className, theme = 'white' }) => {
  return (
    <div className={`card card--${theme} ${className}`}>
      <div className='title'>{title}</div>
      <div className='content'>{children}</div>
    </div>
  );
}