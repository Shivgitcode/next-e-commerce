"use client";

import { SetStateAction, createContext, useContext, useState } from "react";
import { useSession } from "next-auth/react";

type Value = {
    type: string,
    setType: React.Dispatch<SetStateAction<string>>,

}


export const AppContext = createContext<undefined | Value>(undefined)



export function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [type, setType] = useState<string>("login")
    const session = useSession()
    const value: Value = {
        type,
        setType,

    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export default function useMyContext() {
    const context = useContext(AppContext);
    if (typeof context === "undefined")
        throw new Error("undefined context")
    return context
}