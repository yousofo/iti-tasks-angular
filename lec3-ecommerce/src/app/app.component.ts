import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './lib/components/layout/header/header.component';
import { FooterComponent } from './lib/components/layout/footer/footer.component';
import { SidebarComponent } from './lib/components/layout/sidebar/sidebar.component';
import { LoginComponent } from './lib/components/login/login.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lec3-Ecommerce';
}
