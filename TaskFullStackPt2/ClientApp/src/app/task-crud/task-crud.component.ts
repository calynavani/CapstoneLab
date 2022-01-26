import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css'],
  providers: [TaskService]
})
export class TaskCRUDComponent implements OnInit {
  tasks?: Task[]=[];

  constructor(private taskService: TaskService) { 

  }

  ngOnInit() {
  }

  DeleteTask(id:number, index:number){
    this.taskService.DeleteATask(id).subscribe(
      (response:any) => {
        console.log(id + " was deleted successfully from our database");
        //splice goes to an index in an array, and removes the number of elements set in the 
        //second parameter. Then it will return the smaller array so we set it to the orginial
        //array variable, so we can see the deletion on the front end
        this.tasks.splice(index, 1);
      }
    );
  }

  UpdateTask(id:number){
    let displayPanel = document.getElementById("display" + id);
    let updatePanel = document.getElementById("update" + id);


    //if the display is empty, by defaullt the element will be shown
    if(displayPanel.style.display === "" || displayPanel.style.display === "inherit") {
      displayPanel.style.display = "none";
      updatePanel.style.display = "inherit";
    }
    else if(displayPanel.style.display ==="none"){
      displayPanel.style.display = "inherit";
      updatePanel.style.display = "none";
    }
  }
}
