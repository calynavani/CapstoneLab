import { Component, Input, OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
  providers: [TaskService]
})
export class DeleteTaskComponent implements OnInit {
  @Input() Id:number;
  task?: Task;
  constructor(private taskDAL: TaskService) { }

  ngOnInit() {
    this.taskDAL.GetTaskList().subscribe(
      (response: Task) => {
        
        let json = Convert.taskToJson(response);
        this.task = Convert.toTask(json);
        //console.log(this.Task);
      }
    );
    
  }

  DeleteATask(id:number){
    let name: string = (<HTMLInputElement> document.getElementById("name")).value;
    console.log(name);
    let instructions: string =(<HTMLInputElement> document.getElementById("instructions")).value;
    console.log(instructions);
    let dueDate: Date = (<HTMLInputElement> document.getElementById("dueDate")).value;
    console.log(dueDate);
    let isCompleted: any = (<HTMLInputElement> document.getElementById("completed")).value;
    console.log(isCompleted);

    let removedTask: Task = {id: 0, name:name, instructions:instructions, dueDate:dueDate, isCompleted:false};
    //We will pass this model to the task service. 
    this.taskDAL.DeleteATask(id).subscribe(
      (response: any) => {location.reload() }
    );
  }



}
