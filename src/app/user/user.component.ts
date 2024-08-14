import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: String;
  @Input() name!: String;
  get imagepath(){
    return '../../Assets-img/' + this.avatar;
  }
  selectedUser(){
    return 0;
  }

}
