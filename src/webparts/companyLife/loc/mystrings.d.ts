declare interface ICfpLifeWebPartStrings {
  PropertyPaneDescription: string;
  SquaresListDescription: string;
  SquareHeight: string;
  iconInformation: string;

  // Properties
  squaresDataLabel: string;
  squaresPanelHeader: string;
  squaresManageBtn: string;

  // Tile fields
  titleField: string;
  descriptionField: string;
  urlField: string;
  targetField: string;

  targetCurrent: string;
  targetNew: string;

  // Component
  noSquaresIconText: string;
  noSquaresConfigured: string;
  noSquaresBtn: string;
}

declare module 'CfpLifeWebPartStrings' {
  const strings: ICfpLifeWebPartStrings;
  export = strings;
}
