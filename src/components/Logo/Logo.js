import React from 'react';
import classes from './Logo.css'

import burguerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className = {classes.Logo}>
    <img src= {burguerLogo}  alt='MyBurguer'/>
  </div>
  
);

export default logo;