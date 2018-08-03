import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'CfpLifeWebPartStrings';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneLabel, PropertyPaneLink, PropertyPaneHorizontalRule } from '@microsoft/sp-webpart-base';
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/propertyFields/number';
import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { CfpLife, ICfpLifeProps, ISquareInfo, LinkTarget } from './components';



export interface ICfpLifeWebPartProps {
  collectionData: ISquareInfo[];
  tileHeight: number;
  title: string;
}

export default class CfpLifeWebPart extends BaseClientSideWebPart<ICfpLifeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICfpLifeProps> = React.createElement(
      CfpLife,
      {
        title: this.properties.title,
        tileHeight: this.properties.tileHeight,
        collectionData: this.properties.collectionData,
        displayMode: this.displayMode,
        showModal: false,
        fUpdateProperty: (value: string) => {
          this.properties.title = value;
        },
        fPropertyPaneOpen: this.context.propertyPane.open
      }
    );

    ReactDom.render(element, this.domElement);
  }


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                PropertyPaneLabel('', {
                  text: strings.iconInformation
                }),
                PropertyPaneLink('', {
                  text: "UI Fabric Icons",
                  href: "https://developer.microsoft.com/en-us/fabric#/styles/icons",
                  target: "_blank"
                }),
                PropertyPaneHorizontalRule(),
                PropertyFieldCollectionData("collectionData", {
                  key: "collectionData",
                  label: strings.squaresDataLabel,
                  panelHeader: strings.squaresPanelHeader,
                  manageBtnLabel: strings.squaresManageBtn,
                  value: this.properties.collectionData,
                  fields: [
                    {
                      id: "title",
                      title: strings.titleField,
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "description",
                      title: strings.descriptionField,
                      type: CustomCollectionFieldType.string,
                      required: false
                    },
                    {
                      id: "ImageUrl",
                      title: strings.urlField,
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                  ]
                }),
                PropertyFieldNumber('tileHeight', {
                  key: "tileHeight",
                  label: strings.SquareHeight,
                  value: this.properties.tileHeight
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
