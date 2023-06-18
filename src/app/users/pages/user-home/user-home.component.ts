import { Component } from '@angular/core';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  public users: User[] = [];
  public counter: number = 0;

  constructor() {}
  
  createUser( newUser: User ) {
    this.users.push( {...newUser, id: (++this.counter).toString() } );
    
    this.users = [...this.users ];
  }

}
