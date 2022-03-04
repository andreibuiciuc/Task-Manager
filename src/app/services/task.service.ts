import { Injectable } from '@angular/core';
import  { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  
  constructor(private httpClient: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }
}
