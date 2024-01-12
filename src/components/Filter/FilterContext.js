import { createContext, useContext } from 'react';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
    return <FilterContext.Provider >{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
    return useContext(FilterContext)
}