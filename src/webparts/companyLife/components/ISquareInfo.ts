export interface ISquareInfo {
    title: string;
    description: string;
    ImageUrl: string;
    icon: string;
    target: LinkTarget;
  }
  
  export enum LinkTarget {
    parent = "",
    blank = "_blank"
  }
  