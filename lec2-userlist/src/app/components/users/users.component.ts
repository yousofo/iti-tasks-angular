import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import users from './users.json'

@Component({
  selector: 'app-users',
  imports: [UserComponent,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = users;
  searchQuery: string = '';
  filteredItems = [...this.users];

  search() {
    console.log(this.searchQuery);
    this.filteredItems = this.users.filter(user =>
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  
  clear(){
    this.searchQuery = '';
    this.filteredItems = [...this.users];
  }
}
