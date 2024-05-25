import { useState } from "react";
import { createContext } from "react";
import ApiService from "../services/api";
import { useContext } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const [user, setUser] = useState(null);

    const login = async ({ username, password }) => {
        setLoading(true);
        return await ApiService.login({
            username,
            password,
        }).then((res) => {
            setIsAuthenticated(true);
            setLoading(false);
            setLoadingAuth(false);
            setUser(res.user);
            return res;
        });
    };

    const accessToken = localStorage.getItem("accessToken");


    const register = async ({ username, email, password, passwordConfirm }) => {
        setLoading(true);
        return await ApiService.register({
            username,
            email,
            password,
            passwordConfirm,
        }).then((res) => {
            setLoading(false);
            return res;
        });
    };

    const IsAuthenticatedHandler = (value) => {
        setIsAuthenticated(value)
    }

    const SetLoadingAuthHandler = (value) => {
        setLoadingAuth(value)
    }

    return (
        <AuthContext.Provider
            value={{
                loading,
                isAuthenticated,
                loadingAuth,
                accessToken,
                login,
                register,
                user,
                IsAuthenticatedHandler,
                SetLoadingAuthHandler
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}

