import { createContext, useReducer, useMemo, useEffect } from "react";

export const initialState = { theme: "light", data: [] }

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'SET_DATA', payload: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};