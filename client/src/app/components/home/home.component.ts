import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Task } from 'src/app/interfaces/task.interface';
import { TasksService } from 'src/app/services/tasks.service';
import { UtilsService } from 'src/app/services/utils.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public utils: UtilsService, private readonly taskService: TasksService) { }

  public tasksLenght: number = 0;
  public actualDate: Date = new Date();
  public listOfTasks: any[] = [];
  public myUser!: any;

  ngOnInit(): void {
    this.getTasksNumber();
    this.getAllTasks();
    this.myUser = window.localStorage.getItem('user')
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '800px'
    });
  }

  getAllTasks() {
    this.taskService.getTasks().subscribe((response: any) => {
      this.listOfTasks = response;
  })
  }

  getTasksNumber() {
    this.taskService.getTasks().subscribe(response => {
        for (let i in response) {
          this.tasksLenght += 1;
        }
    })
  }

  showFiller = false;
}
