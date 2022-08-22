import {createContext, Dispatch, SetStateAction} from "react";

type GlobalContextType = {
    user: string | null,
    setUser: Dispatch<SetStateAction<string | null>>
}

export const GlobalContext = createContext<GlobalContextType>({
        user: null,
        setUser: () => {}
    }
)