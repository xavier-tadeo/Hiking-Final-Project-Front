export type FormElement = React.FormEvent<HTMLFormElement>;

export interface IForm {
  name: string;
  password: string;
}

export interface Maping {
  latitude: number | any;
  longitude: number | any;
}

export interface Stadistics {
  distance: string;
  time: string;
  elevation: string;
  dificulty: number | any;
}

export interface IFormHike {
  title: string;
  description: string;
  map: Maping;
  stadistics: Stadistics;
  images?: any;
}
