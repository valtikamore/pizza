import { useCallback, useMemo, useState } from "react";
import { AppContext } from "contexts/app.context";


export const AppProvider = ({children}) => {
    const [searchPizzaValue, setSearchPizzaValue] = useState('');

    const onChangeSearchPizza = useCallback((e:any) => {
        setSearchPizzaValue(e.target.value)
    }, [setSearchPizzaValue]);

    const contextValue = useMemo(() => ({
            onChangeSearchPizza,
            searchPizzaValue
        }), [searchPizzaValue,setSearchPizzaValue]);

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
};
