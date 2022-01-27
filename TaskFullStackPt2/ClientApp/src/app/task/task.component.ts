import { Component, OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
currentTask?: Task;
  constructor(private taskDAL: TaskService) { }

 
    ngOnInit() {
      this.taskDAL.GetTaskList().subscribe(
        (response: Task) => {
          
          let json = Convert.taskToJson(response);
          this.currentTask = Convert.toTask(json);
          //console.log(this.currentTask);
        }
      );
    }
    SearchForTaskByName()
    {
      let Name:string = (<HTMLInputElement>document.getElementById("name")).value;
  
      this.taskDAL.SearchForTaskByName(Name).subscribe(
        (response: any) => {
          let json = Convert.taskToJson(response);
          this.currentTask=Convert.toTask(json);
        }
      );
  
    
    }
  
   // DeleteTask(id: number)
    //{
   //     this.taskDAL.DeleteATask(id).subscribe(
  //        (response: Task) => { location.replace('task') });
  //  }

}
