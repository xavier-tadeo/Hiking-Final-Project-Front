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

export interface IFormRegister {
  name: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  age: string;
  birthday: string;
}

interface IProfile {
  email: string;
  favorite: Array<string>;
  id: string;
  name: string;
  password: string;
  yourRoutes: Array<string>;
}

export interface IProfileObject {
  user: IProfile;
}

interface ICurrentHike {
  description: string;
  id: string;
  images: Array<string>;
  map: Maping;
  stadistics: Stadistics;
  title: string;
  user: string;
}

export interface ICurrentHikeObject {
  currentHike: ICurrentHike;
}
