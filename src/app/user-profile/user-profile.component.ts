import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  showAge:boolean = false

  user = {
    lastname : 'Doe',
    firstname : 'John',
    age : 25,
    quote : 'Two beer or not to beer',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  showingAge() {
    this.showAge = !this.showAge;
  }
}
