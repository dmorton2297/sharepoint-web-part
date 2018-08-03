import * as React from 'react';
import styles from './Square.module.scss'
import { ISquareProps } from '.';
import { Modal } from 'office-ui-fabric-react/lib/Modal';



export class Square extends React.Component<ISquareProps, { showModal : boolean }> {

    constructor() {
        super();
        this.state = { showModal : false }
      }

    public render(): React.ReactElement<ISquareProps> {

        const squareStyle: React.CSSProperties = {};
        if (this.props.height) {
            squareStyle.height = `${this.props.height}px`;
        }

        squareStyle.backgroundImage = `url("${this.props.item.ImageUrl}")`;


        return (
            <div className={styles.square} style={squareStyle}>
            <Modal
                isOpen={this.state.showModal}
                onDismiss={this._closeModal}
                isBlocking={false}
                containerClassName="ms-container"
                >
                <div className="ms-modalExample-header">
                    <span>{this.props.item.title}</span>
                </div>
                <div className="ms-modalExample-body">
                <img src={this.props.item.ImageUrl} alt="image" height="200" width="200"></img>
                    <h1>{this.props.item.title}</h1>
                    <p>
                    {this.props.item.description}
                    </p>
                </div>
             </Modal>
                <a onClick={this._showModal}
                    title={this.props.item.title}>
                    <div className={styles.squareTitle}>
                        {this.props.item.title}
                    </div>
                    <div className={styles.overflow}>
                        {this.props.item.description}
                    </div>
                </a>
            </div>
        );
    }

    private _showModal = (): void => {
        this.setState({ showModal: true });
      };
    
      private _closeModal = (): void => {
        this.setState({ showModal: false });
      };
}