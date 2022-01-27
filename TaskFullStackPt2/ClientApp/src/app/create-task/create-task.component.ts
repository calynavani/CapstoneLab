import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {Task} from '../Task';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {

  }
  CreateATask(){
    let name: string = (<HTMLInputElement> document.getElementById("name")).value;
    console.log(name);
    let instructions: string =(<HTMLInputElement> document.getElementById("instructions")).value;
    console.log(instructions);
    let dueDate: string = (<HTMLInputElement> document.getElementById("dueDate")).value;
    console.log(dueDate);
    let isCompleted: any = (<HTMLInputElement> document.getElementById("completed")).value;
    console.log(isCompleted);

    let newTask: Task = {id: 0, name:name, instructions:instructions, dueDate:dueDate, isCompleted:false};
    //We will pass this model to the task service. 
    this.taskService.CreateATask(newTask).subscribe(
      (response: any) => {location.reload() }
    );
  }

}
