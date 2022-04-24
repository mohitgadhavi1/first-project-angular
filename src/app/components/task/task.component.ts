import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-task'
import {Task} from '../../Task'
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[]=[]

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks)
  }

}
