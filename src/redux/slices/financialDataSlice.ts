import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FinancialEntry {
  id: number;
  type: string;
  amount: number;
  description: string;
}

const initialState: FinancialEntry[] = [];

const financialDataSlice = createSlice({
  name: "financialData",
  initialState,
  reducers: {
    addFinancialEntry: (state, action: PayloadAction<FinancialEntry>) => {
      state.push(action.payload);
    },
  },
});

export const { addFinancialEntry } = financialDataSlice.actions;
export default financialDataSlice.reducer;
