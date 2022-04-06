import { Component } from '@angular/core';
import { DailyTasks } from './daily-tasks'; //importing the Daily Tasks class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   //use of class to create the daily tasks
  tasks:DailyTasks[] =[
    {id:1, descriptionOfTask:'Watch live movie'},
    {id:2, descriptionOfTask:'Watch Real Madrid vs Chelsea'},
    {id:3, descriptionOfTask:'Visit Rwanda'},
    {id:4, descriptionOfTask:'Make an Angular TO do List '},
    {id:5, descriptionOfTask:'learn form validation'},
    {id:6, descriptionOfTask:'create and deploy an angular application'}

  ];

  
}
