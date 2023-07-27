import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("taskList") || "[]");

  constructor() { }

  ngDoCheck(): void {
    this.setTaskLocalStorage();
  }

  public addNewTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTasks() {
    const confirm = window.confirm("Você realmente deseja deletar todas as tarefas?");

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Tarefa está vazia, deseja deletar?");

      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setTaskLocalStorage() {
    if(this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      //A função sort() é usada para ordenar o array com base no retorno de uma função de comparação passada como argumento.
      // Nesse caso, a função de comparação (first, last) => Number(first.checked) - Number(last.checked) compara os valores booleanos
      // checked convertidos em números (0 para falso e 1 para verdadeiro). A ordenação é feita em ordem crescente
      // com as tarefas não concluídas (checked: false) aparecendo antes das tarefas concluídas (checked: true).


      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }
}
