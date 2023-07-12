import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss'],
})
export class ToDoInputAddItensComponent {
  @Output() public emiteItemTask = new EventEmitter();

  public addItemTask: string = '';

  public submitItemTask() {
    this.addItemTask = this.addItemTask.trim();
    if (this.addItemTask) {
      this.emiteItemTask.emit(this.addItemTask);
      this.addItemTask = '';
    }
  }
}
