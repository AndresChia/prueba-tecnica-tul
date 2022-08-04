export interface Menu {
  id: string;
  key: string;
  title: string;
  route: string;
  subRoute?: Array<SubRoute>;
  children: Array<string>;
}

export interface SubRoute {
  id: string;
  title: string;
  route: string;
}
