import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  removeUser(user: User) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
