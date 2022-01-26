import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {TaskComponent} from './Task/task.component';
import{TaskCRUDComponent} from './task-crud/task-crud.component';
import{UpdateTaskComponent} from './update-task/update-task.component';
import {DeleteTaskComponent} from './delete-task/delete-task.component';
import{CreateTaskComponent} from './create-task/create-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TaskComponent,
    TaskCRUDComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    CreateTaskComponent,
    SearchTaskComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'task', component: TaskComponent},
      {path: 'task-crud', component: TaskCRUDComponent},
      {path: 'update-task', component:UpdateTaskComponent},
      {path: 'delete-task', component: DeleteTaskComponent},
      {path: 'create-task', component:CreateTaskComponent},
      {path: 'search-task',component:SearchTaskComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
