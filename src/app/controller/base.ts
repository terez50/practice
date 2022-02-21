import { User } from "../model/user";
import { UserService } from "../service/user.service";

export abstract class Base {

  constructor(
    public userService: UserService,
  ) {}

  onDelUser(user: User): void {
    this.userService.removeUser(user);
  }
}
