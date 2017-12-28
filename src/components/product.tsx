import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router';
import { ProductsType } from '../index';

export interface ProductRouteParams { id: number }
export interface ProductProps extends RouteComponentProps<ProductRouteParams> {
    products: ProductsType
    addToCart: (id: number) => void
}
export interface ProductState {}
export class Product extends React.Component <ProductProps, ProductState> {
    handleBuy = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
        this.props.addToCart(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <img src={this.props.products[this.props.match.params.id].src} style={{ height: '80%' }} />
                <p>{this.props.products[this.props.match.params.id].title}</p>
                <Link
                    to={{
                        pathname: `/cart`,
                        state: { productId: this.props.match.params.id }
                    }}
                    onClick={this.handleBuy}
                    className="btn btn-primary"
                >
                    Buy
                </Link>
            </div>
        )
    }
}

export default Product