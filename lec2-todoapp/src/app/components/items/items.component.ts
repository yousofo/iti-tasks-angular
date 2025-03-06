import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IItem } from '../../types/item';
import confetti from 'canvas-confetti';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import {
  addTodoItem,
  clearLS,
  getLSItem,
  removeTodoItem,
} from '../../lib/localStorageHelpers';

@Component({
  selector: 'app-items',
  imports: [ItemComponent, FormsModule, ConfirmDialogModule, ToastModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ItemsComponent {
  items!: IItem[];
  newItem: string = '';

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.items = getLSItem('todo') || [];
  }
  addItem() {
    if (!this.newItem.trim()) return;

    const newId = Date.now().toString();

    addTodoItem({
      id: newId,
      description: this.newItem,
      completed: false,
    });

    this.items.push({
      id: newId,
      description: this.newItem,
      completed: false,
    });
    console.log(this.items);
    this.newItem = '';
  }

  refreshItems() {
    this.items = getLSItem('todo') || [];
  }

  removeItem(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    removeTodoItem(id);
  }

  clearAll(event: Event) {
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
        this.items = [];
        clearLS();
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Records deleted',
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
