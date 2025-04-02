import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryState {
  value: string;
}

const initialState: CountryState = {
  value: "South Africa",
};

export const countrySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCountry: (state, action: PayloadAction<{ country: string }>) => {
      const { country } = action.payload;
      state.value = country;
    },
  },
});

export const { changeCountry } = countrySlice.actions;
export default countrySlice.reducer;
