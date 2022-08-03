import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskUpdateComponent } from './pages/task-update/task-update.component';

const routes: Routes = [
  {
    path: "",
    component: MainTaskComponent,
  },
  {
    path: ":id/:title/:detail",
    component: TaskUpdateComponent,
  },
  {
    path: "new",
    component: TaskCreateComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
