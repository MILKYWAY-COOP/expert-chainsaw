//const API_KEY = '70083fa828cd4a9db27aa185ec664e95';
const API_KEY = '70083fa82db27aa185ec664e95';

export const SpoonacularApi = {
  async fetchData(query: string) {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
