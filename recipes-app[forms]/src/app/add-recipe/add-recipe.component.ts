import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  username: string = 'Ahmed';

  formValues = {
    recipeName: '',
    description: ''
  }

  handleSubmitForm(form : any){
    console.log(form)
    console.log(form.value)
  }
}
