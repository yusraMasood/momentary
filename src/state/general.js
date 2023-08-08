import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import initial from "./initial";

export const generalReducer = createSlice({
  name: initial.general.name,
  initialState: initial.general.state,
  reducers: {
    toggleGlobalLoader: (state, action) => {
      state.globalLoadingEnabled = action.payload;
    },
    toggleInlineLoader: (state, action) => {
      state.inlineLoadingEnabled = action.payload;
    },
  },
});
export const useGlobalLoader = () => {
  const isLoading = useSelector(state => state.general.globalLoadingEnabled);
  return isLoading;
};
export const useInlineLoader = () => {
  const isLoading = useSelector(state => state.general.inlineLoadingEnabled);
  return isLoading;
};
export const { toggleGlobalLoader, toggleInlineLoader } =
  generalReducer.actions;
export default generalReducer.reducer;
