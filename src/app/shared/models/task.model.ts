import { Priority } from "../constants/priority.constants";
import { TaskStatus } from "../constants/task-status.constants";
export class Task {
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
    }

}