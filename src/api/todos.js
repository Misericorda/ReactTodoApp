export const filterTodos = (todos, showCompleted, searchFor) => {
  let filteredTodos = todos;

  filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted;
  });

  if (searchFor) {
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.text.toLowerCase().indexOf(searchFor) !== -1;
    })
  }

  filteredTodos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1
    } else {
      return 0
    }
  });
  return filteredTodos
};