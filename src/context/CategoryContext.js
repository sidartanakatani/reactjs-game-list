import React, { useContext, useState } from "react";

export const CategoryContext = React.createContext();

export function useCategory() {
  return useContext(CategoryContext);
}

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
