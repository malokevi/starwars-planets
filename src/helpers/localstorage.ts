export const setStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const checkStorage = (key: string) => {
  return localStorage.getItem(key)
}

export const deleteStorage = (key: string) => {
  return localStorage.removeItem(key)
}
