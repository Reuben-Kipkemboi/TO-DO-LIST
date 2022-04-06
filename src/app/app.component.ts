import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:string[];

  constructor(){
    this.tasks = ['make money', 'Visit Rwanda']
  }
}
