import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseResponse, Todolist } from './types';

const httpOptions = {
  withCredentials: true,
  headers: {
    'API-KEY': '58a993db-1dec-4e5e-aeb2-a54bfae69c2c',
  },
};

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todolist[] = [];
  inputValue = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.http
      .get<Todolist[]>('https://social-network.samuraijs.com/api/1.1//todo-lists', httpOptions)
      .subscribe((res: Todolist[]) => (this.todos = res));
  }

  createTodo() {
    this.http
      .post<BaseResponse<{ item: Todolist }>>(
        'https://social-network.samuraijs.com/api/1.1//todo-lists',
        { title: this.inputValue },
        httpOptions,
      )
      .subscribe((res) => {
        this.todos.unshift(res.data.item);
        this.inputValue = '';

        console.log('todo created');
      });
  }

  deleteTodo(todolistId: string) {
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1//todo-lists/${todolistId}`,
        httpOptions,
      )
      .subscribe(() => {
        this.todos = this.todos.filter((todo) => {
          return todo.id !== todolistId;
        });

        console.log('todo deleted');
      });
  }

  updateTodoTitle(todolistId: string, newTitle: string) {
    this.http
      .put<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1//todo-lists/${todolistId}`,
        { title: newTitle },
        httpOptions,
      )
      .subscribe(() => {
        const updatedTodo = this.todos.find((todo) => todo.id === todolistId);
        if (updatedTodo) updatedTodo.title = newTitle;

        console.log('todo updated');
      });
  }
}
