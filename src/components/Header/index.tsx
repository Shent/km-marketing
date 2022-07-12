import React, { FC } from 'react';
import { Logo } from '../Logo';
import './styles.css';

export const Header: FC = () => {
  return (
    <header>
      <div className="header">
        <img className='logo' height={60} src='/images/v-logo-blue.png' alt='logo' />
        <Logo />
      </div>
    </header>
  )
}