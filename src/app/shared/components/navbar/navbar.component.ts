import { Component } from '@angular/core';
import { Router } from 'src/app/router-controller.routing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public userRoute: string = Router.USERS;
  public homeRoute: string = Router.HOME;

  constructor() { }

}
