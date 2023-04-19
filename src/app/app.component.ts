import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Tour of heroes';
  name: string = "Bob";

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): void  {
    alert("Hello " + this.name);
  }
}
