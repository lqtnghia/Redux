import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import themeReducer from "./themeReducer";

// Kết hợp các reducer
const rootReducer = combineReducers({
  counter: counterReducer, // Quản lý state của counter
  todos: todoReducer, // Quản lý state của todos
  theme: themeReducer // Quản lý state của theme
});

export default rootReducer;
