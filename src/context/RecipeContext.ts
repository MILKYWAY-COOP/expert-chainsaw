import { createContext } from 'react';

import { spoonacularContextProps } from 'types/recipe';

export const SpoonacularContext = createContext<spoonacularContextProps>({
  recipes: [],
  setRecipes: () => {}
});
