import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { TaskUpdateComponent } from './pages/task-update/task-update.component';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainTaskComponent,
    TaskUpdateComponent,
    TaskCreateComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
  ]
})

export class TaskModule { }
