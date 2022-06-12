import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TasksService } from 'src/app/services/tasks.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  constructor(private readonly taskService: TasksService, public dialogRef: MatDialogRef<DialogComponent>, private readonly utils: UtilsService) { }

  public TaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    property: new FormControl('', Validators.required),
    progress: new FormControl('', Validators.required),
    deadline: new FormControl('', Validators.required)
  });

  subjects: Subjects[] = [
    {value: 'Frontend', viewValue: 'Frontend'},
    {value: 'Backend', viewValue: 'Backend'},
    {value: 'Testing', viewValue: 'Testing'},
    {value: 'UI/UX', viewValue: 'UI/UX'},
    {value: 'Data Analysis', viewValue: 'Data Analysis'},
    {value: 'Web Designing', viewValue: 'Web Designing'},

  ];

  ngOnInit(): void {
  }

  sendData() {
    let task: Task = {
      title: this.TaskForm.value.title,
      subtitle: this.TaskForm.value.subtitle,
      property: this.TaskForm.value.property,
      progress: this.TaskForm.value.progress,
      deadline: this.TaskForm.value.deadline,
    }
    this.taskService.createTask(task).subscribe(response => {
      this.dialogRef.close();
      this.utils.validRequest('Task successfully created ! ')
    })

  }

}
interface Subjects {
  value: string;
  viewValue: string;
};