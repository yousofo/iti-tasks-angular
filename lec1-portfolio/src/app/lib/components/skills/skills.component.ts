import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skills',
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  items = [
    { name: 'Angular', level: 9 },
    { name: 'React', level: 4 },
    { name: 'Vue', level: 7 },
    { name: 'Svelte', level: 5 },
    { name: 'Ember', level: 3 },
    { name: 'Justice', level: 1.5 }
  ]
}
