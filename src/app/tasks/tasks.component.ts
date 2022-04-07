import { Component, OnInit } from '@angular/core';
import { DailyTasks } from '../daily-tasks'; //importing the Daily Tasks class

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //use of class to create the daily tasks
  tasks:DailyTasks[] =[
    {name:'Movie task', descriptionOfTask:'Watch live movie with the boys'},
    {name:'Football task', descriptionOfTask:'Watch Real Madrid vs Chelsea football match'},
    {name:'Visit task', descriptionOfTask:'Visit Rwanda'},
    {name:'Development task', descriptionOfTask:'Make an Angular TO do List '},
    {name:'Learning task', descriptionOfTask:'learn form validation'},
    {name:'Deployment task', descriptionOfTask:'create and deploy an angular application'}

  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
