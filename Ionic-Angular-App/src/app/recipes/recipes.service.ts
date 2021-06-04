import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Donut',
      imageUrl:'https://i2.wp.com/www.aimadeitforyou.com/wp-content/uploads/2016/04/fullsizeoutput_5f68.jpeg?resize=768%2C512&ssl=1',
      ingredients: ['Sugar', 'Chocolate', 'milk'],
    },
    {
      id: 'r2',
      title: 'Tagliatelle au Saumon',
      imageUrl:'https://static.colruyt.be/culinair/Groenteboekje_winter_2012/Recept_look_Kids_retouche_MR.jpg',
      ingredients: ['tagliatelle', 'saumon', 'tomates'],
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>  recipe.id === recipeId )
    };
  };

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>  recipe.id !== recipeId );
  }


}
