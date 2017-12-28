import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { Checkout } from './components/checkout';
import Index from './components/index';
import { Product } from './components/product';
import { Cart } from './components/cart';

export type CartItemsType = { [item: number]: number }
const cartItems: CartItemsType = {}
export type ProductType = {
  id: number,
  src: string,
  title: string,
  url: string
}
export type ProductsType = ProductType[]
export const PRODUCTS: ProductsType = [
  {
    id: 0,
    src: 'images/proexpress-cover.jpg',
    title: 'Pro Express.js',
    url: 'http://amzn.to/1D6qiqk'
  },
  {
    id: 1,
    src: 'images/practicalnode-cover.jpeg',
    title: 'Practical Node.js',
    url: 'http://amzn.to/NuQ0fM'
  },
  {
    id: 2,
    src: 'images/expressapiref-cover.jpg',
    title: 'Express API Reference',
    url: 'http://amzn.to/1xcHanf'
  },
  {
    id: 3,
    src: 'images/reactquickly-cover.jpg',
    title: 'React Quickly',
    url: 'https://www.manning.com/books/react-quickly'
  },
  {
    id: 4,
    src: 'images/fullstack-cover.png',
    title: 'Full Stack JavaScript',
    url: 'http://www.apress.com/9781484217504'
  }
]
const addToCart = (id: number) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

ReactDOM.render(
  <BrowserRouter>
    <div>

    <Route 
      path="/" 
      render={(appRouteProps) => ( 
        <App {...appRouteProps}>
          <Route 
            exact={true}
            path="/" 
            render={ indexRouteProps =>
            <Index {...indexRouteProps} PRODUCTS={PRODUCTS} />
          }/>
          <Route 
            path="/products/:id" 
            render={ (productRouteProps) => (
              <Product {...productRouteProps} addToCart={addToCart} products={PRODUCTS}/>
            )}
          />
          <Route
            path="/cart"
            render={(cartRouteProps) => (
              <Cart {...cartRouteProps} cartItems={cartItems} products={PRODUCTS}/>
            )}
            
          />
        </App> 
      )}
    />
    <Route 
      path="/checkout" 
      render={(routerProps) => ( 
        <Checkout {...routerProps} cartItems={cartItems} products={PRODUCTS}/> 
      )}
    />
    </div>
    
  </BrowserRouter>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
