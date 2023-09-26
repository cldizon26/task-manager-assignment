import { Priority } from "../constants/priority.constants";
import { TaskStatus } from "../constants/task-status.constants";
import {v4 as uuidv4} from 'uuid';
export class Task {
    public readonly id: string;
    public name: string; 
    public description: string;
    public status: TaskStatus;
    public dueDate: Date;
    public priority: Priority;

    constructor(name: string, description: string , status = TaskStatus.NotStarted, dueDate:Date , priority = Priority.Low ) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = uuidv4();
    }

}