import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Todolist {
  addedDate: Date;
  id: string;
  order: number;
  title: string;
}

export interface BaseResponse<T = {}> {
  data: T;
  messages: string[];
  fieldsErrors: any[];
  resultCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class HttpTodosService {
  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': `${environment.apiKey}`,
    },
  };

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todolist[]> {
    return this.http.get<Todolist[]>(`${environment.baseURL}/todo-lists`, this.httpOptions);
  }

  createTodo(title: string): Observable<BaseResponse<{ item: Todolist }>> {
    return this.http.post<BaseResponse<{ item: Todolist }>>(
      `${environment.baseURL}/todo-lists`,
      { title },
      this.httpOptions,
    );
  }

  deleteTodo(todolistId: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(
      `${environment.baseURL}/todo-lists/${todolistId}`,
      this.httpOptions,
    );
  }

  updateTodoTitle(todolistId: string, newTitle: string): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(
      `${environment.baseURL}/todo-lists/${todolistId}`,
      { title: newTitle },
      this.httpOptions,
    );
  }
}
