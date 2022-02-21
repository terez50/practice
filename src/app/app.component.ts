import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';

  users: User[] = [
    {id: 'nedudgi', name: "János", email: "ja@gmail.com"},
    {id: 2, name: "Jenő", email: "je@gmail.com"},
    {id: 3, name: "Juli", email: "ju@gmail.com"}
  ];

}
