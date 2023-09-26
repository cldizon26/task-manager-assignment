import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './shared/components/task-list/task-list.component';
import { TaskEditFormComponent } from './shared/components/task-edit-form/task-edit-form.component';
import { TaskDetailsComponent } from './shared/components/task-details/task-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'task', component: TaskDetailsComponent, children: [
    {path : ':id', component: TaskDetailsComponent},
    {path: ':id/edit', component: TaskEditFormComponent}
  ]}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
