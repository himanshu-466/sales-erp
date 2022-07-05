import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../../API/Url";
export const GetContact = createAsyncThunk(
  "getContact",
  async (searchquery) => {
    const Token = JSON.parse(localStorage.getItem("user-info"));
    const response = await fetch(
      `${BASEURL}services/projects/contact/?search=${searchquery}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      }
    );
    const data = await response.json();
    return data.results;
  }
);
export const PostContact = createAsyncThunk("postContact", async (obj) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(`${BASEURL}services/projects/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${Token}`,
    },
    body: JSON.stringify(obj),
  });

  const data = await response.json();
  return data;
});
export const UpdateContact = createAsyncThunk("updateContact", async (arr) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(
    `${BASEURL}services/projects/contact/${arr[0]}/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Token}`,
      },
      body: JSON.stringify(arr[1]),
    }
  );
  const data = await response.json();
  return data;
});
export const DeleteContact = createAsyncThunk("deleteContact", async (id) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(`${BASEURL}services/projects/contact/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${Token}`,
    },
  });
  return response;
});
const initialStateValue = {
  Value: [],
  status: "",
  postResult: {},
  postError: "",
  updateResult: {},
  updateError: "",
  deleteResult: "",
  deletError: "",
};

export const ContactSlice = createSlice({
  name: "Contact",
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
    [GetContact.fulfilled]: (state, action) => {
      state.Value = action.payload;
    },

    [GetContact.rejected]: (state, action) => {
      state.status = 400;
    },
    [PostContact.fulfilled]: (state, action) => {
      state.postResult = action.payload;
    },
    [PostContact.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [UpdateContact.fulfilled]: (state, action) => {
      state.updateResult = action.payload;
    },
    [UpdateContact.rejected]: (state, action) => {
      state.updateError = 400;
    },
    [DeleteContact.fulfilled]: (state, action) => {
      state.deleteResult = action.payload;
    },
    [DeleteContact.rejected]: (state, action) => {
      state.deleteError = 400;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = ContactSlice.actions;

export default ContactSlice.reducer;
