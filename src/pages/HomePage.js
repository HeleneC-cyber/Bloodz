import React from 'react';
import LogoXl from '../assets/images/logo-xl.svg'
import flowerHome from '../assets/images/flower-home.svg'
import waterGif from '../assets/images/ripples-344_256.gif'
import bigEye from '../assets/images/big-eye.svg'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='hero'>
            <img className='animation-hero logo-hero' src={LogoXl} alt='logo' />
            <h1 className='animation-hero'>Le groupe sanguin, le lien secret de votre âme sœur.</h1>
            <img className='animation-hero-late' src={flowerHome} alt='fleurs ornementales' />
            <img className='animation-hero-late' src={waterGif} alt="gouttes d'eau animées" />
            <Link className='big-eye' to='/presentation' ><img src={bigEye} alt="bouton en forme d'oeil cliquable" /></Link>
        </div>
    );
};

export default HomePage;