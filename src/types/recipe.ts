interface Results {
  id: number;
  image: string;
  imageType: string;
  title: string;
}

export interface Recipe {
  number: number;
  offset: number;
  results: Results[];
}

export interface spoonacularContextProps {
  search: (searchTerm: string) => {};
  recipe: Recipe;
  setRecipeId: (id: number) => void;
  recipeInfo: any;
}

export interface NavigationProps {
  navigation: {
    navigate: (name: string) => void;
  };
}
