import React from 'react';
import { Link } from 'react-router-dom';
import drop from '../assets/images/drops-blood.svg'
import venus from '../assets/images/venus.svg'
import mars from '../assets/images/mars.svg'
 

const Card = ({gender, age, firstName, lastName, id, bloodGroup, image}) => {
    const displayGender = () => {
        switch(gender) {
            case 'female':
                return <img className='gender' src={venus} alt='Genre féminin'/>
            case 'male':
                return <img className='gender' src={mars} alt='Genre masculin'/>
            default :
                return ''
        }
    }
    return (
        <div className='card-profil'>
            <img className='photo' src={image} alt='photo de profil'/>
            <img className='drop'   src={drop}/>
            <Link to={'/profil/' + id}></Link>
            <div className='overlay-card'>
            <p>{bloodGroup}</p>
            <p>{firstName} {lastName}</p>
            <p>{age} ans</p>
            {displayGender()}
            </div>
        </div>
    );
};

export default Card;