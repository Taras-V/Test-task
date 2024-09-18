export interface IDashboardElements {
  title?: string;
  subtitle?: string;
  points?: string;
  type: DashboardType;
  bgImage?:string;
  icon?: string;
}[];

export enum DashboardType {
  point = 'point',
  icon = 'icon',
  input = 'input',
}
