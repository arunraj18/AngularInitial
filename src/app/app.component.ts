import { Component } from '@angular/core';
import {Navcomponent} from './nav/nav.component';
import { UserComponent } from './user/user.component';
import {users} from '../Assets-img/users'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navcomponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = users;


}
