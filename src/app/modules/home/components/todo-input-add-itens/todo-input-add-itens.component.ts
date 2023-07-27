import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() public emitAddNewTask = new EventEmitter();

  public task: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public emitEventAddNewTask() {
    this.task = this.task.trim(); //Remover os espaços vazios da string

    if(this.task) {
      this.emitAddNewTask.emit(this.task);
      this.task = "";
    }
  }
}
