import { Component } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private loginService: LoginService) {}

  toggleLoginDialog(event: Event) {
    this.loginService.toggleLoginDialog(event);
    // console.log('from header-islogindialog: ',this.loginService.isLoginDialog());
  }
  
  logout() {
    this.loginService.logout();
  }
  get isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
}
