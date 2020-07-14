import React from 'react';
import classes from './Burger.css';
import BurguerIngredient from './BurgerIngredients/BurgerIngredient';

const burguer = (props) => {
    return (
        <div className = {classes.Burger}>
            <BurguerIngredient type="bread-top"/>
            <BurguerIngredient type="cheese"/>
            <BurguerIngredient type="salad"/>
            <BurguerIngredient type="meat"/>
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;