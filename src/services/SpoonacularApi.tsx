import { useState, useEffect } from 'react';

import { Recipe } from 'types/recipe';

export const SpoonacularApi = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeId, setRecipeId] = useState<number>();
  const [recipeInfo, setRecipeInfo] = useState([]);
  const API_KEY = '70083fa828cd4a9db27aa185ec664e95';

  const search = async (searchTerm: string) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setRecipe(data);
  };

  useEffect(() => {
    const getRecipeInfo = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecipeInfo(data);
    };
    getRecipeInfo();
  }, [recipeId]);

  return { search, recipe, setRecipeId, recipeInfo };
};
