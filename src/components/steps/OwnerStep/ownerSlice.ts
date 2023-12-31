import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OwnerState {
  ownerData: {
    name: string;
    email: string;
    phone: string;
  };
}

export const initialState: OwnerState = {
  ownerData: {
    name: "",
    email: "",
    phone: "",
  },
};

export const ownerSlice = createSlice({
  name: "ownerForm",
  initialState,
  reducers: {
    setOwnerData: (state, action: PayloadAction<OwnerState["ownerData"]>) => {
      state.ownerData = action.payload;
    },
  },
});

export const { setOwnerData } = ownerSlice.actions;

export default ownerSlice.reducer;
