import { useReducer, createContext, useEffect } from 'react';

export const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, token: action.payload };
    case 'LOGOUT':
      return { ...state, token: null };
    case 'DATAUSER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (!token) {
      return;
    }
    dispatch({type: 'LOGIN', payload: token})
  }, []);
  
  console.log('AuthContext state ', state);
  //TODO probar useEffect para probar si puedo traer un usuario teniendo el token
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
