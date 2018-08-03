import * as React from 'react';
import * as strings from 'CfpLifeWebPartStrings';
import styles from './CfpLife.module.scss';
import { ICfpLifeProps } from './ICfpLifeProps';
import { Square } from './square';
import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';
import { Modal } from 'office-ui-fabric-react/lib/Modal';



export class CfpLife extends React.Component<ICfpLifeProps, { showModal : boolean }> {

    constructor() {
      super();
      this.state = { showModal : true }
    }

  public render(): React.ReactElement<ICfpLifeProps> {
    return (
      <div className={ styles.squares }>
        <WebPartTitle displayMode={this.props.displayMode}
                      title={this.props.title}
                      updateProperty={this.props.fUpdateProperty} />
        {
          this.props.collectionData && this.props.collectionData.length > 0 ? (
            <div className={styles.squares}>
              {
                this.props.collectionData.map((square, idx) => <Square key={idx} item={square} height={this.props.tileHeight} />)
              }
            </div>
          ) : (
            <Placeholder
              iconName='Edit'
              iconText={strings.noSquaresIconText}
              description={strings.noSquaresConfigured}
              buttonLabel={strings.noSquaresBtn}
              onConfigure={this.props.fPropertyPaneOpen} />
          )
      }
      </div>
      
    );
  }
}
