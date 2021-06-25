import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn;

  constructor() {
    // check if user is logged in
    if(sessionStorage.getItem('user')){
      // render tasks
      this.loggedIn = true;
    }else{
      // render login page
      this.loggedIn = false;
    }
  }

  handleLogin(event:any) {
    sessionStorage.setItem(event.key, event.value);
    this.loggedIn = true;
  }

  handleLogout() {
    sessionStorage.clear();
    this.loggedIn = false;
  }
  
}
