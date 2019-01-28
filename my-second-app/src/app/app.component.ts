import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hacı celal aygar for my-second-app';
  message:string;
  constructor(){
    this.title = 'Angular 7 project ';
    this.message = 'This project was built by Hacı Celal Aygar....';
  }
}
