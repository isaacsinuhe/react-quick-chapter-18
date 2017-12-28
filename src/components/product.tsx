import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router';

export interface ProductRouteParams {id: string}
export interface ProductProps extends RouteComponentProps<ProductRouteParams> {}
export interface ProductState {}
export class Product extends React.Component <ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props)
    }
    handleBuy = (event) => {
        this.props.route.addToCart(this.props.params.id)
    }
    render() {
        return (
            <div>
                <img src={this.props.route.products[this.props.params.id].src} style={{ height: '80%' }} />
                <p>{this.props.route.products[this.props.params.id].title}</p>
                <Link
                    to={{
                        pathname: `/cart`,
                        state: { productId: this.props.params.id }
                    }}
                    onClick={this.handleBuy}
                    className="btn btn-primary">
                    Buy
        </Link>
            </div>
        )
    }
}

export default Product