import { Component, input } from '@angular/core';
import { IUser } from '../../types/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  data = input<IUser>();
}
