import { Component, input, output } from '@angular/core';
import { IItem } from '../../types/item';
import { editTodoItem, removeTodoItem } from '../../lib/localStorageHelpers';
import confetti from 'canvas-confetti';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-item',
  imports: [ConfirmDialogModule, ToastModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ItemComponent {
  data = input<IItem>();
  triggerParent = output<boolean>();

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  complete(event: Event) {
    if (this.data()!.completed)
      return this.messageService.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'cannot undo what has been done',
        life: 3000,
      });

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Save',
      },
      accept: () => {
        editTodoItem({
          id: this.data()!.id,
          description: this.data()!.description,
          completed: true,
        });
        this.triggerParent.emit(true);
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#ff0000', '#00ff00', '#0000ff'],
        });
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
  deleteItem(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        removeTodoItem(this.data()!.id);
        this.triggerParent.emit(true);
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }
}
