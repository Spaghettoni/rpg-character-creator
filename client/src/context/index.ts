import {createContext, Dispatch, SetStateAction} from "react";

type GlobalContextType = {
    user: string | null,
    setUser: Dispatch<SetStateAction<string | null>>,
    characters: [] | null,
    setCharacters: Dispatch<SetStateAction<[] | null>>,
}

export const GlobalContext = createContext<GlobalContextType>({
        user: null,
        setUser: () => {},
        characters: null,
        setCharacters: () => {}
    }
)