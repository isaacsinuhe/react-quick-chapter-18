import * as React from 'react'
import { Link } from 'react-router-dom'
import { LocationDescriptor } from 'history';

export interface ModalProps { returnTo: LocationDescriptor, isOpen: boolean }
export interface ModalState {}
export class Modal extends React.Component<ModalProps, ModalState> {
    styles: React.CSSProperties
    constructor(props: ModalProps) {
        super(props)
        this.styles = {
            position: 'fixed',
            top: '20%',
            right: '20%',
            bottom: '20%',
            left: '20%',
            width: 450,
            height: 400,
            padding: 20,
            boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
            overflow: 'auto',
            background: '#fff'
        }
    }
    render() {
        return (
            <div style={this.styles}>
                <p>
                    <Link to={this.props.returnTo}>Back</Link>
                </p>
                {this.props.children}
            </div>
        )
    }
}
export default Modal;