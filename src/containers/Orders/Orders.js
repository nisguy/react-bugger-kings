import React, {Component} from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Orders/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component{
    state = {
        orders: [],
        loading: false
    };

    componentWillMount () {
        this.setState({loading: true});
        axios.get('/orders.json')
            .then(response =>{
                this.setState({loading: false});
                let orders = [];
                for (let key in response.data) {
                    orders.push({
                        ...response.data[key],
                        id: key});
                }
                this.setState({orders: orders});
            }).catch(e=>{
                this.setState({loading: false});
                console.log(e)});
    };

    render (){
        let orders = this.state.orders.map(each=> {
            return <Order key={each.id} order={each}/>;
        });
        if (this.state.loading){
            orders = <Spinner/>;
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders;