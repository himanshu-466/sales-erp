import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import loginreducer from "./Redux/Slices/LoginSlice";
import contactReducer from "./Redux/Slices/ContactSlice";
import companyReducer from "./Redux/Slices/CompanySlice";
import ProjectReducer from "./Redux/Slices/ProjectSlice";
import FormDataReducer from "./Redux/Slices/FormDataSlice";
import ApiReducer from "./Redux/Slices/ApiStateSlice";

const store = configureStore({
  reducer: {
    login: loginreducer,
    contact: contactReducer,
    company: companyReducer,
    project: ProjectReducer,
    formdata: FormDataReducer,
    apistate: ApiReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  },
});

export default store;
