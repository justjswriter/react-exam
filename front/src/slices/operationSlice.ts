import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IOperation } from "../types";

export const fetchOperations = createAsyncThunk("fetchOperations", async () => {
  const res = await fetch("http://localhost:8080/operations");
  const data = res.json();
  return data;
});

interface IOperState{
    data: IOperation[]
}

const initialState = {
    data: [],
} as IOperState;

const operationSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOperations.fulfilled, (state, action) => {
        state.data = action.payload.reverse()
    });
  },
});

export default operationSlice.reducer;