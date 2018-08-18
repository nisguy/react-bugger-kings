import React, {Component} from 'react';

import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/burger/burger';

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            Salad: 1,
            Bacon: 1,
            Cheese: 2,
            Meat: 2
        }
    };
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;