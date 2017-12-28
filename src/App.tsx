import * as React from 'react'
import Modal from './components/modal'
import { RouteComponentProps } from 'react-router';

const Heading = () => {
  return <h1>Nile Book Store</h1>
}

export interface AppProps extends RouteComponentProps <{}> {}
export interface AppState {}
export class App extends React.Component <AppProps, AppState> {
  isModal: boolean
  previousChildren: React.ReactNode
  componentWillReceiveProps(nextProps: AppProps) {
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }
  render() {
    console.log('Modal: ', this.props.children, this.previousChildren)
    return (
      <div className="well">
        <Heading />
        <div>
          {
            (this.isModal) ? this.previousChildren : this.props.children
          }
          {/* {this.props.children} */}
          {
            (this.isModal) ?
              <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
                {this.props.children}
              </Modal> : ''
          }
        </div>
      </div>
    )
  }
}

export default App
