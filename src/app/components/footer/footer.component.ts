import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() onLogout: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  signOut(): void {
    console.log('inside sign out');
    this.onLogout.emit();
  }

}
