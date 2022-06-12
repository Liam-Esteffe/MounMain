import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({providedIn: 'root'})
export class TasksService {
    constructor(private readonly http: HttpClient) { }
    

    getTasks(): Observable<Object> {
        const url = 'http://localhost:3000/tasks/all'
        return this.http.get(url);
    }

    createTask(task: Task) {
        const url = 'http://localhost:3000/tasks/create';
        return this.http.post(url, task);
    }
}