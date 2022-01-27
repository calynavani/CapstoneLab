import { Component, Input, OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
  providers: [TaskService]
})
export class UpdateTaskComponent implements OnInit {
  
  tasks: Task;
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.taskService.GetTaskList().subscribe(
      (response:any) => { 
      console.log(response);
      this.tasks = response; 
      }
    );
  }

  UpdateTask(id:number){
    // let name: string = (<HTMLInputElement> document.getElementById("name")).value;
    // console.log(name);
    // let instructions: string =(<HTMLInputElement> document.getElementById("instructions")).value;
    // console.log(instructions);
    // let dueDate: string = (<HTMLInputElement> document.getElementById("dueDate")).value;
    // console.log(dueDate); 
    // let isCompleted: any = (<HTMLInputElement> document.getElementById("completed")).value;
    // console.log(isCompleted);

    let updatedTask: Task = {id:id, name:"fghjkl", instructions:"wsdfggggg", dueDate:"0000-22-11", isCompleted:true};
    console.log(updatedTask);
    // We will pass this model to the task service. 
    this.taskService.UpdateATask(updatedTask,id).subscribe(
      (response: any) => {location.reload() }
    );
  }
}
