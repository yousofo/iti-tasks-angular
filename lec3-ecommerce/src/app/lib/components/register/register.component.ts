import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    PasswordModule,
    MessageModule,
    ButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.email,
        Validators.required,
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    }),
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ],
    }),
  });

  get isEmailValid() {
    return (
      this.form.get('email')?.invalid &&
      (this.form.get('email')?.touched || this.form.get('email')?.dirty)
    );
  }

  get isPasswordValid() {
    return (
      this.form.get('password')?.invalid &&
      (this.form.get('password')?.touched || this.form.get('password')?.dirty)
    );
  }

  get isNameValid() {
    return (
      this.form.get('name')?.invalid &&
      (this.form.get('name')?.touched || this.form.get('name')?.dirty)
    );
  }

  get isUsernameValid() {
    return (
      this.form.get('username')?.invalid &&
      (this.form.get('username')?.touched || this.form.get('username')?.dirty)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }else {
       this.form.markAllAsTouched();
    }
  }
}
