import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './Task';
import { Observable } from 'rxjs';
import { SearchTaskComponent } from './search-task/search-task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
url: string ="Task";
  constructor(private http:HttpClient, @Inject('BASE_URL')baseUrl: string) {
    this.url = baseUrl + this.url;
   }
   GetTaskList(): Observable<any>{
    return this.http.get<Task>(this.url);
  }
  
    //THink of observable as the pizza order, I've told Tiffany's what I want
    //Now i need to wait for it to be delievered 
    GetATask(id: number){
      return(this.http.get(this.url +"/get/" + id));
    }
  
    CreateATask(t: Task){
      console.log(t);
      return this.http.post(this.url + "/makeNew/", t);   
    }
  
    DeleteATask(id:number){
      return this.http.delete(this.url + "/delete/" + id);
    }
  
    UpdateATask(newTask: Task, id: number){
      return this.http.put(this.url + "/update/" + id, newTask);
    }

    SearchForTask(name:string)
    {
      return this.http.get(this.url + "/Search/" + name);
    }
  
    }

    
  


