import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
   temp;
  appState = 'default';
  constructor(private _todoService: TodoService) { }
  title = 'todos work!';

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }
   addTodo(){
    
     var newTodo = {
       text: this.text
     }
      console.log(this.text);
     this.todos.push(newTodo);
     this._todoService.addTodo(newTodo);
   }
   deleteTodo(todoText){
     //console.log(ind);
     for(var i=0; i<this.todos.length; i++){
       if(this.todos[i].text == todoText){
         this.todos.splice(i,1);
         break;
       }
     }
     this._todoService.deleteTodo(todoText)
   }
   editTodo(todo){
     this.appState = 'edit';
     this.oldText = todo.text;
     this.text = todo.text;
       }

    updateTodo(){
      for(var i=0; i<this.todos.length; i++){
       if(this.todos[i].text == this.oldText){
         this.todos[i].text = this.text;
         break;
       }
     }
     this._todoService.updateTodo(this.oldText,this.text)
    }

}
