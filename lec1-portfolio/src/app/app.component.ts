import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './lib/components/skills/skills.component';
import { PortfolioComponent } from './lib/components/portfolio/portfolio.component';
import { HeroComponent } from './lib/components/hero/hero.component';
import { FooterComponent } from './lib/components/footer/footer.component';
import { AboutComponent } from './lib/components/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SkillsComponent,PortfolioComponent,HeroComponent,FooterComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lec1-portfolio';
}
