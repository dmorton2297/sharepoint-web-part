import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ICfpLifeWebPartProps } from './../CfpLifeWebPart';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface ICfpLifeProps extends ICfpLifeWebPartProps {
  displayMode: DisplayMode;
  showModal: boolean;

  fUpdateProperty: (value: string) => void;
  fPropertyPaneOpen: () => void;
}
