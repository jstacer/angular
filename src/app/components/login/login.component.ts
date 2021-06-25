import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from '../../User';
import {USERS} from '../../mock-users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<any> = new EventEmitter();
  showError = false;
  email: string;
  password: string;
  user: User;

  constructor() {
    this.email = '';
    this.password = '';
    this.user = USERS[0];
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.showError = false;
    if((this.user.email === this.email && this.user.password === this.password))
    {
      const loggedInUser = {
        key: 'user',
        value: this.email
      }
      this.onLogin.emit(loggedInUser);
    }
    else{
      this.showError = true;
    }
  }

}