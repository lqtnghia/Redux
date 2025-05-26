import { createStore } from "redux";
import rootReducer from "./reducers";

// Lấy state từ localStorage (nếu có)
const loadState = () => {
  try {
    const savedState = localStorage.getItem("reduxState");
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

// Lưu state vào localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state); // Chuyển state thành chuỗi JSON
    localStorage.setItem("reduxState", serializedState); // Lưu vào localStorage
  } catch (err) {
    console.error("Lỗi khi lưu state:", err);
  }
};

// Tạo store
const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Đăng ký lắng nghe thay đổi state và lưu vào localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
