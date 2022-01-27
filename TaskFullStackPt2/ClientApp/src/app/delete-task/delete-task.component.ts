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
    this.taskDAL.DeleteATask(id).subscribe(
      (response: any) => {location.reload() }
    );
  }



}
