import {createContext, Dispatch, SetStateAction} from "react";
import {User} from "../types";

type GlobalContextType = {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
}

export const GlobalContext = createContext<GlobalContextType>({
        user: null,
        setUser: () => {},
    }
)