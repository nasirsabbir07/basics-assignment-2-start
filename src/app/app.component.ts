import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  usernameEmpty: boolean = true;

  updateInputStatus(event: any) {
    if (event.target.value != '') {
      this.usernameEmpty = false;
    } else {
      this.usernameEmpty = true;
    }
  }

  reset(event: Event) {
    this.username = '';
    this.usernameEmpty = true;
  }
}
