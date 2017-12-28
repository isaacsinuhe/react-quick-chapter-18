import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router';
import { CartItemsType, ProductsType } from '../index';

export interface CartProps extends RouteComponentProps<{}> {
    cartItems: CartItemsType
    products: ProductsType
}
export interface CartState {}
export class Cart extends React.Component<CartProps, CartState> {
    render() {
        return (
            <div>
                {
                    (Object.keys(this.props.cartItems).length === 0) ?
                    <p>Your cart is empty</p> :
                    ''
                }
                <ul>
                    {
                        Object.keys(this.props.cartItems).map((item, index, list) => {
                        return (
                            <li key={item}>
                                {
                                    this.props.products[item].title} - {this.props.cartItems[item]
                                }
                            </li>
                        )
                    })}
                </ul>
                <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                <Link to="/" className="btn btn-info">Home</Link>
            </div>
        )
    }
}

export default Cart