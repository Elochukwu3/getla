import { useState, useEffect } from 'react';
import {MyCustomError} from "@assets/func/error"
import {CATEGORY_URL} from "@assets/func/endPoint"

const useCategory = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    fetch(CATEGORY_URL)
      .then((response) => {
        if (!response.ok) {
          throw new MyCustomError(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { categories, error };
};

export default useCategory;
