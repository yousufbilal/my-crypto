export const LocalStorageFunc = () => {
  const storedCategories = localStorage.getItem("user")
  const localCategories = JSON.parse(storedCategories)

  return localCategories

}

LocalStorageFunc()