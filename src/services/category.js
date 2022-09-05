import api, { wrapPromise } from "../Api";

export const getCategories = () => {
  return api
    .get(`/categories`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const fetchCategories = () => {
  const categoriesPromise = getCategories();
  return {
    categories: wrapPromise(categoriesPromise),
  };
};
