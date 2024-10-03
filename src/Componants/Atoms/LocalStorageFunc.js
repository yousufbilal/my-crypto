export const LocalStorageFunc = () => {
  const storedCategories = localStorage.getItem("user");
  const localCategories = JSON.parse(storedCategories)

  // return localCategories.slice(page, 5);
  return localCategories

};


// LocalStorageFunc()


// fix this code 