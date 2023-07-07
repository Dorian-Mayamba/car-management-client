import { createContext } from "react";
import { useState, useContext, Dispatch } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export type isAuthContextType = {
    isAuthenticated: boolean;
    setAuthenticated: Dispatch<React.SetStateAction<boolean>>;
}

export type userType = {
    id: number;
    name: string;
    isAdmin: () => boolean;
}

export type authContextType = {
    currentUser: userType | null;
    setCurrentUser: Dispatch<React.SetStateAction<userType | null>>;
}

const AuthContext = createContext<authContextType | null>(null);
const IsAuthContext = createContext<isAuthContextType | null>(null);
const NavigationContext = createContext<NavigateFunction>(()=>-1);

export const useAuth = () => useContext(AuthContext);

export const useIsAuth = () => useContext(IsAuthContext);

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<userType | null>({
        id: 0,
        name: '',
        isAdmin(): boolean {
            return false;
        },
    });
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            <IsAuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
                    {children}
            </IsAuthContext.Provider>
        </AuthContext.Provider>
    )
}