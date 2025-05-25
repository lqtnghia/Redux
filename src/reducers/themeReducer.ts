import { TOGGLE_THEME } from "../actions/themeActions";

// Trạng thái ban đầu
const initialState = {
  isDark: false
};

// Reducer
const themeReducer = (state = initialState, action: any) => {
  console.log({ state, action });
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};

export default themeReducer;
