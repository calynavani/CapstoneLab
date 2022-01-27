import { Component, Input,OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../task.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css'],
  providers: [TaskService]
})
export class SearchTaskComponent implements OnInit {

  currentTask?: Task;

  constructor(private taskDAL: TaskService) { }

  ngOnInit() {
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

}
