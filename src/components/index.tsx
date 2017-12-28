import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProductsType } from '../index';

const Copy = () => {
    return (
        <p>{
            'Please click on a book to view details in a modal. ' +
            'You can copy/paste the link of the modal. ' +
            'The link will open the book on a separate page.'
        }</p>
    )
}

export interface IndexProps extends RouteComponentProps<{}> { PRODUCTS: ProductsType }
export interface IndexState { }
export class Index extends React.Component<IndexProps, IndexState> {
    render() {
        return (
            <div>
                <Copy />
                <p>
                    <Link to="/cart" className="btn btn-danger">Cart</Link>
                </p>
                <div>
                    {
                        this.props.PRODUCTS.map(picture => (
                            <Link
                                key={picture.id}
                                to={{
                                    pathname: `/products/${picture.id}`,
                                    state: {
                                        modal: true,
                                        returnTo: this.props.location.pathname
                                    }
                                }
                                }
                            >
                                <img style={{ margin: 10 }} src={picture.src} height="100" />
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Index