import React, { Component } from 'react';

import Aux from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }
    
    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igkey => {
            return ( 
                <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>  
        );
    }
};


export default OrderSummary;

