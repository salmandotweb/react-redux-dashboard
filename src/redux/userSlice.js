import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Display Name",
    email: "Email",
    bio: "Bio",
    jobTitle: "Job Title",
  },

  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.bio = action.payload.bio;
      state.jobTitle = action.payload.jobTitle;
    },
  },
});

export const { update } = userSlice.actions;

export default userSlice.reducer;
