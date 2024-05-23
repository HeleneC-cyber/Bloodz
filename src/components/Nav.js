import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";

const Nav = () => {
  const [displayMobileMenu,setDisplayMobileMenu] = useState(false)
  return (
    <nav>
      <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="191.451" height="68.142" viewBox="0 0 191.451 68.142">
        <g id="Groupe_3" data-name="Groupe 3" transform="translate(-856.565 -52)">
          <text id="BLOOD_" data-name="BLOOD
" transform="translate(856.565 52)" fill="#fff" font-size="50" font-family="ForteMT, Forte"><tspan x="0" y="44">BLOOD</tspan></text>
          <g id="Groupe_2" data-name="Groupe 2" transform="translate(999.828 79.5)">
            <path id="Tracé_4" data-name="Tracé 4" d="M1071.2,111.557c-20.589.275-21.483-2.69-8.621-17.042.576-.643,1.376-1.522,2.223-2.442,15.122-16.43-12.359-8.87-12.359-8.87l-1.918,6.721s13.072-5.419,3.674,3.627-22.6,30.987,14.66,19.008S1071.2,111.557,1071.2,111.557Z" transform="translate(-1044.024 -81.467)" fill="#fff" stroke="#fff" stroke-width="1" />
            <g id="Groupe_1" data-name="Groupe 1" transform="translate(17.842 9.773)">
              <path id="heart-solid" d="M2.14,12.431l8.124,8.12a1.74,1.74,0,0,0,2.491,0l8.124-8.12a7.447,7.447,0,0,0,2.14-5.271V6.881A6.761,6.761,0,0,0,17.651.094a6.166,6.166,0,0,0-5.6,1.921l-.54.578-.54-.578A6.166,6.166,0,0,0,5.368.094,6.761,6.761,0,0,0,0,6.881V7.16A7.447,7.447,0,0,0,2.14,12.431Z" transform="matrix(0.559, 0.829, -0.829, 0.559, 17.473, 0)" fill="#fff" />
              <path id="heart-solid-2" data-name="heart-solid" d="M1.3,7.542l4.929,4.926a1.056,1.056,0,0,0,1.511,0l4.929-4.926a4.518,4.518,0,0,0,1.3-3.2V4.174A4.1,4.1,0,0,0,10.709.057a3.74,3.74,0,0,0-3.4,1.165l-.327.35-.327-.35A3.74,3.74,0,0,0,3.257.057,4.1,4.1,0,0,0,0,4.174v.169A4.518,4.518,0,0,0,1.3,7.542Z" transform="matrix(0.559, 0.829, -0.829, 0.559, 17.226, 6.071)" fill="#de2e4b" />
              <path id="heart-solid-3" data-name="heart-solid" d="M.683,3.97,3.278,6.563a.556.556,0,0,0,.8,0L6.668,3.97a2.378,2.378,0,0,0,.683-1.683V2.2A2.159,2.159,0,0,0,5.637.03,1.969,1.969,0,0,0,3.848.643L3.676.828,3.5.643A1.969,1.969,0,0,0,1.714.03,2.159,2.159,0,0,0,0,2.2v.089A2.378,2.378,0,0,0,.683,3.97Z" transform="matrix(0.559, 0.829, -0.829, 0.559, 16.565, 10.505)" fill="#8a0d1e" />
            </g>
          </g>
        </g>
      </svg></Link>
      <ul className='desk-menu'>
        <li><NavLink to='/presentation' className={({ isActive }) => isActive ? 'active-nav' : ""}>présentation</NavLink></li>
        <li><NavLink to='/groupes-sanguins' className={({ isActive }) => isActive ? 'active-nav' : ""} >groupes sanguins</NavLink></li>
        <li><NavLink to='/compatibility' className={({ isActive }) => isActive ? 'active-nav' : ""} >compatibilité</NavLink></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="34.094" height="45.458" viewBox="0 0 34.094 45.458">
          <g id="Groupe_38" data-name="Groupe 38" transform="translate(-1720.527 -176.104)">
            <path id="droplet-solid" d="M17.047,45.458A17.051,17.051,0,0,1,0,28.411c0-8.1,11.56-23.289,14.792-27.373A2.761,2.761,0,0,1,16.967,0h.16A2.761,2.761,0,0,1,19.3,1.039c3.232,4.084,14.792,19.275,14.792,27.373A17.051,17.051,0,0,1,17.047,45.458ZM8.523,29.832a1.421,1.421,0,1,0-2.841,0,9.939,9.939,0,0,0,9.944,9.944,1.421,1.421,0,1,0,0-2.841A7.1,7.1,0,0,1,8.523,29.832Z" transform="translate(1720.527 176.104)" fill="#8a0d1e" />
            <path id="droplet-solid-2" data-name="droplet-solid" d="M12.862,34.3A12.866,12.866,0,0,1,0,21.437C0,15.327,8.722,3.865,11.161.784A2.083,2.083,0,0,1,12.8,0h.121a2.083,2.083,0,0,1,1.641.784C17,3.865,25.724,15.327,25.724,21.437A12.866,12.866,0,0,1,12.862,34.3ZM6.431,22.509a1.072,1.072,0,0,0-2.144,0,7.5,7.5,0,0,0,7.5,7.5,1.072,1.072,0,0,0,0-2.144A5.358,5.358,0,0,1,6.431,22.509Z" transform="translate(1725.163 182.515)" fill="#de2e4b" />
          </g>
        </svg></li>
      </ul>
      <button className='burger-btn' onClick={() => setDisplayMobileMenu(true)} >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>
      { displayMobileMenu && <div className='mobile-menu'>
      
        <ul>
        <li><NavLink to='/presentation'>présentation</NavLink></li>
        <li><NavLink to='/groupes-sanguins'>groupes sanguin</NavLink></li>
        <li><NavLink to='/compability'>compatibilité</NavLink></li>
        <li><NavLink to='/'>se connecter</NavLink></li>
        </ul>
        <IoIosClose className='close-icon' onClick={()=> setDisplayMobileMenu(false)}/>
      </div>}
    </nav>
  );
};

export default Nav;