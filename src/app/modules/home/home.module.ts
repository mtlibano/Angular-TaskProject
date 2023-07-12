import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToDoBtnDeleteAllComponent } from './components/to-do-btn-delete-all/to-do-btn-delete-all.component';
import { ToDoInputAddItensComponent } from './components/to-do-input-add-itens/to-do-input-add-itens.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ToDoBtnDeleteAllComponent,
    ToDoInputAddItensComponent,
    ToDoListComponent,
    HomeComponentComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
