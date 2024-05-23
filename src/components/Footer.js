import React from 'react';
import flowerR from '../assets/images/flower-right.svg';


const Footer = ({flower}) => {
    const displayFlower = () => {
        if (flower === true) {
            return (
                <img src={flowerR} alt='fleurs ornementales'/>
            )
        }
        else {
            return ''
        }
    }
    return (
        <footer>
            {displayFlower()}
            <h5>@Site fictif designé et intégré par Hélène Canovas</h5>
        </footer>
    );
};

export default Footer;