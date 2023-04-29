export interface UsersState {
  error: any;
  isLoading: boolean;
  users: any;
}

export interface UsersData {
  limit: number
  skip: number
  total: number
  users: usersArray[]
}

export interface usersArray {
  address: address
  age: number
  bank: banks
  birthDate: Date
  bloodGroup: string
  company: company
  domain: string
  ein: string
  email: string
  eyeColor: string
  firstName: string
  gender: string
  hair: { color: string, type: string}
  height: number
  id: number
  image: string
  ip: string
  lastName: string
  macAddress: string
  maidenName: string
  password: string
  phone: string
  ssn: string
  university: string
  userAgent: string
  username: string
  weight: number
}

export interface address {
  address: string
  city: string
  coordinates: { lat: number, lng: number }
  postalCode: string
  state: string
}

export interface banks {
  cardExpire: string,
  cardNumber: string,
  cardType: string,
  currency: string,
  iban: string
}

export interface company {
  address: address,
  department: string,
  name: string,
  title: string
}
