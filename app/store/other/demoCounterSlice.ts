import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DemoCounterState {
  value: number;
}

const initialState: DemoCounterState = {
  value: 0,
};

export const demoCounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeDemoCounter: (state, action: PayloadAction<{ amount: number }>) => {
      const { amount } = action.payload;
      state.value += amount;
    },
  },
});

export const { changeDemoCounter } = demoCounterSlice.actions;
export default demoCounterSlice.reducer;
