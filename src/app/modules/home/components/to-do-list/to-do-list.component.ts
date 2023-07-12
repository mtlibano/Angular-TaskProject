import { Component, DoCheck } from '@angular/core';
import { Task } from '../../models/task';
import { first } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements DoCheck {
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public taskList: Array<Task> = JSON.parse(
    localStorage.getItem('tarefas') || '[]'
  );

  // public taskList: Array<Task> = [
  //   { name: 'Max', checked: false },
  //   { name: 'Niki', checked: false },
  // ];

  public setEmitTask(event: string) {
    this.taskList.push({ name: event, checked: false });
  }

  public deleteItem(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm(
      'Tem certeza que deseja apagar todos os registros'
    );
    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa está vazia. deseja deletar?');
      if (confirm) {
        this.deleteItem(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('tarefas', JSON.stringify(this.taskList));
    }
  }
}
