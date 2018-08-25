import React, { Component } from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event)=> {
        event.preventDefault();
        this.setState( { loading: true } );

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email
            },
            deliveryMethod: 'fastest'
        };
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false} );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            });
    };

    render () {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your name"/>
                <input type="email" name="email" placeholder="Your mail"/>
                <input type="text" name="street" placeholder="Street"/>
                <input type="text" name="postal" placeholder="Postal Code"/>
                <Button clicked={this.orderHandler} btnType="Success">Order</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;