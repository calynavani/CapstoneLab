import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCRUDComponent } from './task-crud.component';

describe('TaskCRUDComponent', () => {
  let component: TaskCRUDComponent;
  let fixture: ComponentFixture<TaskCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
