import { ADD_TODO, REMOVE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [] as { id: number; text: string }[]
};

// Reducer
const todoReducer = (state = initialState, action: any) => {
  console.log({ state, action });
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }; // Thêm công việc mới
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default todoReducer;
