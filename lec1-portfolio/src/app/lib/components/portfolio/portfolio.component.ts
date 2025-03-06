import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  names=[
    "Web Design",
    "Web Development",
    "Mobile Development",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing",
  ]
}
