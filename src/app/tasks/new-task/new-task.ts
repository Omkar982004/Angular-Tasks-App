import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId ?: string;
  //or we can also do private taskService = inject(TaskService);

  constructor(private taskService: TaskService){};
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      },
      this.userId!
    )
    this.close.emit();
  }
}
