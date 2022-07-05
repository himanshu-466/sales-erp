import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../../API/Url";
export const GetFormData = createAsyncThunk("getFormData", async () => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(
    "http://hr.flickerp.com:3000/api/v1/services/projects/project_form_data/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Token}`,
      },
    }
  );
  const data = await response.json();
  return data;
});

const initialStateValue = {
  Value: {},
  status: null,
};

export const FormDataSlice = createSlice({
  name: "Formdata",
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
    [GetFormData.fulfilled]: (state, action) => {
      state.Value = action.payload;
    },

    [GetFormData.rejected]: (state, action) => {
      state.status = 400;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = ContactSlice.actions;

export default FormDataSlice.reducer;
