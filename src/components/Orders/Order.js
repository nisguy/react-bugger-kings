import React from 'react';

import classes from './order.css';

const order = (props)=> {
    console.log(props);
    const ingredientArr = Object.keys(props.order.ingredients).map(ingredient => {
        return {name: ingredient, amount: props.order.ingredients[ingredient]};
    });
    const output = ingredientArr.map(igKey => {
        return <span key={igKey.name}
                     style={{textTransform: 'capitalize',border: '1px solid #ccc', margin: '0 5px'}}>{igKey.name} ({igKey.amount})</span>
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients:{output} </p>
            <p>Price: <strong>USD {Number(props.order.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;