import { useState, useEffect } from 'react';

import { Recipe } from 'types/recipe';

export const SpoonacularApi = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeId, setRecipeId] = useState<number>();
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = '70083fa828cd4a9db27aa185ec664e95';

  const search = async (searchTerm: string) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!recipeId) return;
    const getRecipeInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        setRecipeInfo(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getRecipeInfo();
  }, [recipeId]);

  return { search, recipe, setRecipeId, recipeInfo, loading };
};
