import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskStatus } from '../../constants/task-status.constants';
import { Priority } from '../../constants/priority.constants';
//import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  displayedColumns = ['Name', 'Status', 'DueDate','Priority'];
  dataSource:Task[] = [];
  dataSourceEmpty = [];

  constructor() {
    this.dataSource.push(new Task('Initialize project', 'Setup building blocks for project', TaskStatus.NotStarted, new Date( Date.now() + 15 * 24 * 60 * 60 * 1000), Priority.High));
    this.dataSource.push(new Task('Setup pipeline', 'Setup pipeline', TaskStatus.NotStarted, new Date( Date.now() + 15 * 24 * 60 * 60 * 1000), Priority.High));
    this.dataSource.push(new Task('Bulid first demo', 'build running demo', TaskStatus.NotStarted, new Date( Date.now() + 15 * 24 * 60 * 60 * 1000), Priority.High));

  }


}
