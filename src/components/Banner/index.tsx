import React, { FC } from 'react';
import './styles.css';

export const Banner: FC = () => {
  return (
    <div className='banner' style={{ backgroundImage: 'url("/images/bg.jpg")' }} />
  )
}