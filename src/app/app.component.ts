import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'ir ao supermercado', true));   
    this.todos.push(new Todo(3, 'Cortar o cabelo', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index != -1) { this.todos.splice(index, 1); }
  }

  markAsDone() {

  }

  markAsUndone() {

  }
}
