// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  companyId: string | null;
  name: string | null;
  email: string | null;
  companyName: string | null;
  country: string | null;
  role: string | null;
  orgType: string | null;
}

const initialState: UserState = {
  companyId: null,
  name: null,
  email: null,
  companyName: null,
  country: null,
  orgType: null,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        companyId: string;
        name: string;
        email: string;
        companyName: string;
        country: string;
        role: string;
        orgType: string;
      }>,
    ) => {
      const { companyId, name, email, companyName, country, role, orgType } =
        action.payload;
      state.companyId = companyId;
      state.name = name;
      state.email = email;
      state.companyName = companyName;
      state.country = country;
      state.role = role;
      state.orgType = orgType;
    },
    logout: (state) => {
      state.companyId = null;
      state.name = null;
      state.email = null;
      state.companyName = null;
      state.country = null;
      state.role = null;
      state.orgType = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
