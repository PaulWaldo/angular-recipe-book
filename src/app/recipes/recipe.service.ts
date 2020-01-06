import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is just a test',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe.jpg'
    ),
    new Recipe(
      'A Second Recipe',
      'Yet Another test',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe.jpg'
    )
  ];

  getRecipes() {
    // Return a copy to prevent modification
    return this.recipes.slice();
  }

  constructor() {}
}
