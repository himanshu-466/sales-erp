import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../../API/Url";
export const Authenticate = createAsyncThunk("Auth", async (logCredential) => {
  const response = await fetch(`${BASEURL}auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logCredential),
  });
  const data = await response.json();
  return data;
});

const initialStateValue = {
  result: {},
  status: "",
};

export const loginSlice = createSlice({
  name: "Login",
  initialState: initialStateValue,
  reducers: {
    // increment: (state, action) => {
    //   state.name.firstName = action.payload;
    // },
    // decrement: (state) => {
    //   state.count = 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count = action.payload;
    // },
  },
  extraReducers: {
    [Authenticate.fulfilled]: (state, action) => {
      state.result = action.payload;
    },

    [Authenticate.rejected]: (state, action) => {
      state.status = 400;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = loginSlice.actions;

export default loginSlice.reducer;
