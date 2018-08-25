import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Orders/CheckoutSummary/checkoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state= {
        ingredients: null,
        price: 0
    };

    componentWillMount () {
        let ingredients = {};
        let price = 0;
        const params = new URLSearchParams(this.props.location.search);
        for (let param of params.entries()){
            if(param[0] === 'price'){
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, price: price});
    }

    cancelOrder = ()=> {
        this.props.history.goBack();
    };
    continueOrder = ()=> {
        this.props.history.push('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary cancelHandler={this.cancelOrder} continueHandler={this.continueOrder} ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + "/contact-data"}
                       render={(props)=> (<ContactData ingredients={this.state.ingredients}
                                                  price={this.state.price} {...props}/>)}/>
            </div>
        );
    }
}

export default Checkout;