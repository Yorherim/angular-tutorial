import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpTodosService } from 'src/app/services/http-todos.service';
import { BaseResponse, Todolist } from './types';

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todolist[] = [];
  inputValue: string = '';
  error: string = '';
  subscription: Subscription = new Subscription();

  constructor(private httpTodosService: HttpTodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTodos() {
    this.subscription.add(
      this.httpTodosService.getTodos().subscribe({
        next: (res: Todolist[]) => (this.todos = res),
        error: (error) => {
          this.error = error.message;
          setTimeout(() => (this.error = ''), 5000);
        },
      }),
    );
  }

  createTodo() {
    this.subscription.add(
      this.httpTodosService.createTodo(this.inputValue).subscribe((res) => {
        this.todos.unshift(res.data.item);
        this.inputValue = '';
      }),
    );
  }

  deleteTodo(todolistId: string) {
    this.subscription.add(
      this.httpTodosService.deleteTodo(todolistId).subscribe(() => {
        this.todos = this.todos.filter((todo) => {
          return todo.id !== todolistId;
        });
      }),
    );
  }

  updateTodoTitle(todolistId: string, newTitle: string) {
    this.subscription.add(
      this.httpTodosService.updateTodoTitle(todolistId, newTitle).subscribe({
        next: () => {
          const updatedTodo = this.todos.find((todo) => todo.id === todolistId);
          if (updatedTodo) updatedTodo.title = newTitle;
        },
        error: (error) => {
          this.error = error;
        },
      }),
    );
  }
}
