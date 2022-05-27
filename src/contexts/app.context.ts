import { createContext } from "react";

export const AppContext = createContext({
    searchPizzaValue: '',
    onChangeSearchPizza: (e:any) => {}
});
