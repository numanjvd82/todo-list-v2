export const getLocalStorage = () => {
  let todosItem = localStorage.getItem('todos');
  if (todosItem) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
};
