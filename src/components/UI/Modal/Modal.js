import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <Aux>
        <Backdrop 
        show = {props.show}
        clicked = {props.modalClosed}
        />
        <div 
            className = {classes.Modal}
            style = {{
                transform: props.show ? 'translateY(0)': 'translateY(-100vh)', //vh = viewport height and -100 slide it outside the screen
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
        </div>
    </Aux>
);

export default Modal;