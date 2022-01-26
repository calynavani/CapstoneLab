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
  
  @Input() Id:number;
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

  UpdateTask(){
    let name: string = (<HTMLInputElement> document.getElementById("name")).value;
    console.log(name);
    let instructions: string =(<HTMLInputElement> document.getElementById("instructions")).value;
    console.log(instructions);
    let dueDate: Date = (<HTMLInputElement> document.getElementById("dueDate")).value;
    console.log(dueDate);
    let isCompleted: any = (<HTMLInputElement> document.getElementById("completed")).value;
    console.log(isCompleted);

    let updatedTask: Task = {id: 0, name:name, instructions:instructions, dueDate:dueDate, isCompleted:isCompleted};
    //We will pass this model to the task service. 
    this.taskService.UpdateATask(updatedTask, this.Id).subscribe(
      (response: any) => {location.reload() }
    );
  }
}
