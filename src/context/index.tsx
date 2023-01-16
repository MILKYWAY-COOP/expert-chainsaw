import { createContext, useContext } from 'react';

import { SpoonacularApi } from '../services/SpoonacularApi';
import { spoonacularContextProps } from 'types/recipe';

const Context = createContext<spoonacularContextProps>(
  {} as spoonacularContextProps
);

export const useApp = () => useContext(Context);

const StateProvider = ({ children }: any) => {
  const Spoonacular = SpoonacularApi();

  return <Context.Provider value={{ ...Spoonacular }}>{children}</Context.Provider>;
};

export default StateProvider;
