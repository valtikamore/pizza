import { useContext } from "react";
import {AppContext} from "contexts/app.context";

export const useAppContext = () => {
    return useContext(AppContext);
}
