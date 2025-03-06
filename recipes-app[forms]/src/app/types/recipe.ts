export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: Array<string>;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
  releaseDate?: Date;
}
