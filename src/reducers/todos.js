export default (todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.text.length > 0)
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      else return state;
    case "TOGGLE_TODO":
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
});
