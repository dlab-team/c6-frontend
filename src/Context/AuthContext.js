import { useReducer, createContext, useEffect } from 'react';
import { decodeToken } from 'react-jwt';

export const AuthContext = createContext();
const token = sessionStorage.getItem('userToken');

const initialState = {
  user: null,
  token: null || token,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, token: action.payload };
    case 'LOGOUT':
      return { ...state, token: null, user: null };
    case 'DATAUSER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (!token) {
      return;
    }
    const decodedToken = decodeToken(token);
    dispatch({ type: 'LOGIN', payload: token });
    dispatch({ type: 'DATAUSER', payload: decodedToken });
  }, []);

  console.log('AuthContext state ', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
