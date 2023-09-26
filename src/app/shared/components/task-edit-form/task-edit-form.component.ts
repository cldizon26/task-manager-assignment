import { Component, OnInit } from '@angular/core';
//import { Task } from '../../models/task.model';
import { TaskStatus } from '../../constants/task-status.constants';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private _fb: FormBuilder){}

  setupForm(){
    this.taskForm = this._fb.group({
      name: "",
      description: "",
      status: ""
    });
  }

  ngOnInit(): void {
    this.setupForm();
  }

  onSumbit(): void {

  }

}
