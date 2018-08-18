import React from 'react';

import BurgerIngredient from './burgerIngredient/burgerIngredient';
import classes from './burger.css';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="BreadTop"/>
            {ingredients}
            <BurgerIngredient type="BreadBottom"/>
        </div>
    );
};

export default burger;