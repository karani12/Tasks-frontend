import { useState } from "react";
import { createContext } from "react";
import ApiService from "../services/api";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = async ({ username, password }) => {
        setLoading(true);
        return await ApiService.login({
            username,
            password,
        }).then((res) => {
            setIsAuthenticated(true);
            setLoading(false);
            setUser(res.user);
            if(res.error){
                return res;
            }
            navigate(res.user.role === "admin" ? "/admin" : "/dashboard");
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
            navigate("/login");
            return res;
        });
    };
    // get user
    const getUser = async () => {
        setLoading(true);
        return await ApiService.getUser().then((res) => {
            console.log(res);
            setUser(res);
            setLoading(false);
            navigate(res.role === "admin" ? "/admin" : "/dashboard");
            return res;
        }).catch((error) => {
            console.log(error);
            setLoading(false);
            navigate("/login");
        });
    };

    const IsAuthenticatedHandler = (value) => {
        setIsAuthenticated(value)
    }



    return (
        <AuthContext.Provider
            value={{
                loading,
                isAuthenticated,
                accessToken,
                login,
                register,
                user,
                IsAuthenticatedHandler,
                getUser,
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

