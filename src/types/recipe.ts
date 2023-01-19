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

interface ExtendedIngredients {
  id: number;
  original: string;
}

interface RecipeInfo {
  title: string;
  cookingMinutes: number;
  dishTypes: string[];
  extendedIngredients: ExtendedIngredients[];
  instructions: string;
  summary: string;
}

export interface spoonacularContextProps {
  search: (searchTerm: string) => {};
  recipe: Recipe;
  setRecipeId: (id: number) => void;
  recipeInfo: RecipeInfo;
  loading: boolean;
}

export interface NavigationProps {
  navigation: {
    navigate: (name: string) => void;
  };
}

export interface RootStackParamList {
  Home: undefined;
  Details: undefined;
}

export interface IHandleContainerPress {
  handleContainerPress: (id: number) => void;
}