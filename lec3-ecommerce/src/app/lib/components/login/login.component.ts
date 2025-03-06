import {
  Component,
  computed,
  effect,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { LoginService } from '../../services/login.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    PasswordModule,
    InputNumberModule,
    InputTextModule,
    SelectModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class LoginComponent {
  username = signal<string>('');
  password = signal<string>('');
  form = viewChild.required<NgForm>('form');
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private loginService: LoginService
  ) {
    effect(() => {
      console.log('loggedIn: ', this.loginService.isLoggedIn());
      if (this.loginService.isLoginDialog()) {
        this.onLogin(this.loginService.loginEvent()!);
      }
    });
  }

  onLogin(event: Event) {
    this.showDialog();
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
        if (this.form().valid) {
          this.loginService.login();
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted',
          });
        } else {
        }
      },
      reject: () => {
        this.loginService.toggleLoginDialog(null);

        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loginService.login();
      this.closeDialog();
    }else{
      form.form.markAllAsTouched();
    }
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
}
/**
 * <p-confirmdialog #cd>
  <ng-template #headless let-onAccept="onAccept" let-onReject="onReject">
    <div
      class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded"
    >
      <div
        class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
      >
        <i class="pi pi-question !text-5xl"></i>
      </div>
      <!-- <span class="font-bold text-2xl block mb-2 mt-6">{{
        message.header
      }}</span> -->

      <!-- <p class="mb-0">{{ message.message }}</p> -->

      <div class="flex items-center gap-2 mt-6">
        <p-button
          label="Save"
          (onClick)="onAccept()"
          type="submit"
          styleClass="w-32"
        ></p-button>
        <p-button
          label="Cancel"
          [outlined]="true"
          (onClick)="onReject()"
          type="button"
          styleClass="w-32"
        ></p-button>
      </div>
    </div>
  </ng-template>
</p-confirmdialog>
 */
