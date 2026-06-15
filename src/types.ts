export interface Ingredient {
  name: string;
  amount: string;
}

export interface Nutrients {
  calories: number;
  protein: number; // in grams
  fat: number; // in grams
  netCarbs: number; // in grams
  fiber: number; // in grams
  vitamins: string; // text description
}

export interface Recipe {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'snacks' | 'dinner';
  servings: number;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  ingredients: Ingredient[];
  equipment: string[];
  prepSteps: string[];
  cookSteps: string[];
  nutrients: Nutrients;
  gastricSafeNote: string;
}

export interface MealLog {
  id: string;
  recipeId: string;
  recipeName: string;
  category: 'breakfast' | 'lunch' | 'snacks' | 'dinner';
  timestamp: string; // ISO string
  servings: number;
  fatGrams: number;
  proteinGrams: number;
  netCarbsGrams: number;
  calories: number;
}

export interface HydrationLog {
  timestamp: string; // ISO string
  amountMl: number;
}
