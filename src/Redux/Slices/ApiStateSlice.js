import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
  callApi: true,
};

export const ApiStateSlice = createSlice({
  name: "ApiState",
  initialState: initialStateValue,
  reducers: {
    stateManage: (state, action) => {
      state.callApi = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { stateManage } = ApiStateSlice.actions;

export default ApiStateSlice.reducer;
