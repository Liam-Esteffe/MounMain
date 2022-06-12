import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }



  @Input() item!: Task;
  public color!: string;

  ngOnInit(): void {
    switch (this.item.property) {
      case 'Frontend':
        this.color = '#9AD0EC'
        return;
      case 'Backend':
        this.color = '#F6C6EA'
        return;
      case 'Testing':
        this.color = '#FAF4B7'
        return;
      case 'UIUX':
        this.color = '#F2D1D1'
        return;
      case 'Data Analysis':
        this.color = '#FFB2A6'
        return;
      case 'Web Designing':
        this.color = '#C2DED1'
        return;
    }
  }
}
