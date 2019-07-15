import axios from 'axios';
import { User } from "../../hooks";
import { UserResponse } from './types';

export class UsersService {
  constructor(private baseURL: string = 'https://randomuser.me/api/') { }

  async fetchUsers(count: number = 12): Promise<User[]> {
    return axios
      .get(`${this.baseURL}?nat=us&inc=name,location,email,id,phone,picture&results=${count}`)
      .then(response => response.data)
      .then(
        (data: UserResponse) => data.results.map(user => ({
          id: user.id.value,
          name: `${upperCaseString(user.name.first)} ${upperCaseString(user.name.last)}`,
          email: user.email,
          phoneNumber: user.phone,
          location: `${upperCaseString(user.location.city)}, ${upperCaseString(user.location.state)}`,
          image: user.picture.large
        }
        )));
  }
}

function upperCaseString(name: string): string {
  // ensure every part of the city and state are capitalized
  if (name.split(' ').length > 1) {
    return name.split(' ').map(upperCaseString).join(' ');
  }

  return name.slice(0, 1).toUpperCase().concat(name.slice(1));
}

export const userService = new UsersService();
