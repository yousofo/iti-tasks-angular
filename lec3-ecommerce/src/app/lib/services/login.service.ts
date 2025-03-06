import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoginDialog = signal<boolean>(false);
  isLoggedIn = signal<boolean>(false);
  loginEvent = signal<Event | null>(null);
  constructor() {}
  toggleLoginDialog(event : Event|null) {
    if (!this.isLoggedIn()) {
      this.loginEvent.set(event);
      this.isLoginDialog.update((value) => !value);
    }
  }

  login() {
    this.isLoggedIn.set(true); 
    this.isLoginDialog.set(false);
    this.loginEvent.set(null);
  }
  logout() {
    this.isLoggedIn.set(false);
  }
}
