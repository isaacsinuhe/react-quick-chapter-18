import * as React from 'react'
// import { Link } from 'react-router-dom'

export interface CheckoutProps {}
export interface CheckoutState {}
export class Checkout extends React.Component <CheckoutProps, CheckoutState> {
    render() {
        let count = 0
        return (
            <div>
                <h1>Invoice</h1>
                <table className="table table-bordered">
                    <tbody>
                        {Object.keys(this.props.route.cartItems).map((item, index, list) => {
                            count += this.props.route.cartItems[item]
                            return (

                            <tr key={item}>
                                <td>{this.props.route.products[item].title}</td>
                                <td>{this.props.route.cartItems[item]}</td>
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