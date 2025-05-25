import { INCREMENT, DECREMENT } from "../actions/counterActions";

// Trạng thái ban đầu
const initialState = {
  value: 0
};

// Reducer: nhận state và action, trả về state mới
const counterReducer = (state = initialState, action: any) => {
  console.log({ state, action });
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;
