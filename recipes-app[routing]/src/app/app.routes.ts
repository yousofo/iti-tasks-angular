import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SettingsComponent } from './settings/settings.component';
import { RecipeCounterComponent } from './recipe-counter/recipe-counter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent,
    title: 'Recipe List Page',
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
    title: 'Add Recipe Page',
    canActivate: [authGuard]
  },
  {
    path: 'recipe-details/:id',
    component: RecipeDetailsComponent,
    title: 'Recipe Details Page',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Settings Page',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'recipe-counter',
    component: RecipeCounterComponent,
    title: 'Counter Page',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found Page',
  },
];

// ROUTE.TS -> DEFINE ROUTE => { path: "" , component: CompnenetClassName}
// app.component.html -> <router-outlet></router-outlet>
