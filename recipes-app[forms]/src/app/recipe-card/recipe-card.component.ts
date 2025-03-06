import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { Recipe } from '../types/recipe';
import { CommonModule } from '@angular/common';
import { CounterPipe } from '../pipes/counter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [CommonModule, CounterPipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  // DECORATOR BASED

  // @Input() recipeItem!: Recipe;
  // @Output() sendToParent = new EventEmitter<number>();

  // ngOnChanges() {
  //   console.log(this.recipeItem);
  // }

  // handleDeleteRecipe() {
  //   console.log(this.recipeItem.id);
  //   this.sendToParent.emit(this.recipeItem.id);
  // }

  // SIGNALS BASED
  recipeItem = input.required<Recipe>();
  sendToParent = output<number>();

  router = inject(Router);

  // constructor(private router: Router){}

  handleDeleteRecipe() {
    console.log(this.recipeItem().id);
    this.sendToParent.emit(this.recipeItem().id);
  }

  handleRedirect() {
    this.router.navigate(['/recipe-details' , this.recipeItem().id]);
  }
}

// SHARING DATA FROM PARENT [LIST] TO CHILD [CARD]
// PARENT HTML -> <app-child-selector [property]="value" ></app-child-selector>
// CHILD TS -> @Input() property !: TYPE;

// SHARING DATA FROM CHID [CARF] TO PARENT [LIST]
// CHILD TS -> @Output() outputEventInstance = new EventEmitter<TYPE>();
// CHILD TS -> this.outputEventInstance.emit(value)
// PARENT HTML -> <app-child-selector (outputEventInstance)="receivedData($event)" ></app-child-selector>
// PARENT HTML -> receivedData(data: TYPE) {}
