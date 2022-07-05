import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../../API/Url";
export const GetCompany = createAsyncThunk(
  "getCompany",
  async (searchquery) => {
    const Token = JSON.parse(localStorage.getItem("user-info"));
    const response = await fetch(
      `${BASEURL}services/projects/company/?search=${searchquery}`,
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
export const PostCompany = createAsyncThunk("postCompany", async (obj) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(`${BASEURL}services/projects/company/`, {
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

export const UpdateCompany = createAsyncThunk("updateCompany", async (arr) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(
    `${BASEURL}services/projects/company/${arr[0]}/`,
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
export const DeleteCompany = createAsyncThunk("deleteCompany", async (id) => {
  const Token = JSON.parse(localStorage.getItem("user-info"));
  const response = await fetch(`${BASEURL}services/projects/company/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${Token}`,
    },
  });
  return response;
});
export const CompanyContactSearch = createAsyncThunk(
  "companyContactSeach",
  async (name) => {
    const Token = JSON.parse(localStorage.getItem("user-info"));
    const response = await fetch(
      `${BASEURL}services/projects/contact/?search=${name}`,
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
  }
);

export const CompanyProjectSearch = createAsyncThunk(
  "companyProjectSeach",
  async (name) => {
    const Token = JSON.parse(localStorage.getItem("user-info"));
    const response = await fetch(
      `${BASEURL}services/projects/project/?company=${name}`,
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
  }
);
const initialStateValue = {
  Value: [],
  status: "",
  postResult: {},
  postError: "",
  updateResult: {},
  updateError: "",
  deleteResult: "",
  deletError: "",
  getCompanyContactResult: {},
  getCompanyContactError: "",
  getCompanyProjectResult: {},
  getCompanyProjectError: "",
};

export const CompanySlice = createSlice({
  name: "Company",
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
    [GetCompany.fulfilled]: (state, action) => {
      state.Value = action.payload;
    },

    [GetCompany.rejected]: (state, action) => {
      state.status = 400;
    },
    [PostCompany.fulfilled]: (state, action) => {
      state.postResult = action.payload;
    },
    [PostCompany.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [UpdateCompany.fulfilled]: (state, action) => {
      state.updateResult = action.payload;
    },
    [UpdateCompany.rejected]: (state, action) => {
      state.updateError = 400;
    },
    [DeleteCompany.fulfilled]: (state, action) => {
      state.deleteResult = action.payload;
    },
    [DeleteCompany.rejected]: (state, action) => {
      state.deleteError = 400;
    },
    [CompanyContactSearch.fulfilled]: (state, action) => {
      state.getCompanyContactResult = action.payload;
    },
    [CompanyContactSearch.rejected]: (state, action) => {
      state.getCompanyContactError = 400;
    },
    [CompanyProjectSearch.fulfilled]: (state, action) => {
      state.getCompanyProjectResult = action.payload;
    },
    [CompanyProjectSearch.rejected]: (state, action) => {
      state.getCompanyProjectError = 400;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = ContactSlice.actions;

export default CompanySlice.reducer;
