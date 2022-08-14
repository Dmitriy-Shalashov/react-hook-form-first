export interface IAddres {
  country: string;
  city: string;
  street: string;
  house: string;
}

export interface IShippingFields {
  email: string;
  name: string;
  addres: IAddres;
}

export interface IOption {
  value: string;
  label: string;
}
