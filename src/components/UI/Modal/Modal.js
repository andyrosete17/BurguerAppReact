import React from 'react';
import classes from './Modal.css';

const Modal = (props) => (
    <div 
        className = {classes.Modal}
        style = {{
            transform: props.show ? 'translateY(0)': 'translateY(-100vh)', //vh = viewport height and -100 slide it outside the screen
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
    </div>
);

export default Modal;