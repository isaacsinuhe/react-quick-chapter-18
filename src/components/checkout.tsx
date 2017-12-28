import * as React from 'react'
import { CartItemsType, ProductsType } from '../index';
// import { Link } from 'react-router-dom'

export interface CheckoutProps { 
    products: ProductsType, 
    cartItems: CartItemsType
}
export interface CheckoutState {}
export class Checkout extends React.Component <CheckoutProps, CheckoutState> {
    render() {
        let count = 0
        return (
            <div>
                <h1>Invoice</h1>
                <table className="table table-bordered">
                    <tbody>
                        {Object.keys(this.props.cartItems).map((item, index, list) => {
                            count += this.props.cartItems[item]
                            return (

                            <tr key={item}>
                                <td>{this.props.products[item].title}</td>
                                <td>{this.props.cartItems[item]}</td>
                            </tr>
                            
                            )
                        })}
                    </tbody>
                </table>
                <p>Total: {count}</p>
            </div>    
        )
    }
}

export default Checkout