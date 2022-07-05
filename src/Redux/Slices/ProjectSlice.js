import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../../API/Url";
export const GetProject = createAsyncThunk(
  "getProject",
  async (searchquery) => {
    const Token = JSON.parse(localStorage.getItem("user-info"));
    const response = await fetch(
      `${BASEURL}services/projects/project/?search=${searchquery}`,
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
export const PostProject = createAsyncThunk("postProject", async (obj) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));

  const response = await fetch(`${BASEURL}services/projects/project/`, {
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
export const UpdateProject = createAsyncThunk("updateProject", async (arr) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(
    `${BASEURL}services/projects/project/${arr[0]}/`,
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
export const DeleteProject = createAsyncThunk("deleteProject", async (id) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(`${BASEURL}services/projects/project/${id}/`, {
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

export const ProjectSlice = createSlice({
  name: "Project",
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
    [GetProject.fulfilled]: (state, action) => {
      state.Value = action.payload;
    },

    [GetProject.rejected]: (state, action) => {
      state.status = 400;
    },
    [PostProject.fulfilled]: (state, action) => {
      state.postResult = action.payload;
    },
    [PostProject.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [UpdateProject.fulfilled]: (state, action) => {
      state.updateResult = action.payload;
    },
    [UpdateProject.rejected]: (state, action) => {
      state.updateError = 400;
    },
    [DeleteProject.fulfilled]: (state, action) => {
      state.deleteResult = action.payload;
    },
    [DeleteProject.rejected]: (state, action) => {
      state.deleteError = 400;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = ContactSlice.actions;

export default ProjectSlice.reducer;
