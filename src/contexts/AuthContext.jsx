import { createContext, useEffect, useReducer } from "react";

const initialState = {
    isAuthenticated: false, // đã đăng nhập hay chưa
    isInitialized : false, // đã kiểm tra trạng thái đăng nhập chưa
    user: null,
    isLoading: true,
};  

const INTIALIZE ="INITIALIZE";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const authReducer = (state, action) => {
    switch (action.type) {
        case INTIALIZE:
            const {isAuthenticated,user} = action.payload;
            return {
                ...state,
                isAuthenticated,
                isInitialized: true,
                isLoading: false,
                user,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isInitialized: true,
                isLoading: false,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const    [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const intialize = async () => {
            try {
                const username = window.localStorage.getItem("username");
                console.log(username);

                if (username) {
                    dispatch({
                        type: INTIALIZE,
                        payload: { isAuthenticated: true, user: {username} },
                    });
                } else {
                    dispatch({
                        type: INTIALIZE,
                        payload: {isAuthenticated: false, user: null }
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: INTIALIZE,
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };
        intialize();
    },[]);

    const login = async (username) => {
        window.localStorage.setItem("username",username);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {username},
        });
    };

    const logout = async () => {
        window.localStorage.removeItem("username");
        dispatch({ type: LOGOUT });
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};