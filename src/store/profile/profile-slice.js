import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    email: "",
    firstName: "",
    lastName: "",
    created_at: null,
    updated_at: null
  },
  status: "idle",
  error: null,
  reactions: 0
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileAdded: {
      reducer(state, action) {
        state.user = { ...state.user, ...action.payload.user };
      },
      prepare({ id, email, firstName, lastName, created_at, updated_at }) {
        return {
          payload: {
            user: { id, email, firstName, lastName, created_at, updated_at }
          }
        };
      }
    },
    profileClear: {
      reducer(state) {
        state.user = { ...state.user, ...initialState.user };
      }
    },
    /*     reactionAdded(state, action) {
      const { profileId, reaction } = action.payload;
      const existingProfile = state.profile.find(
        (profile) => profile.id === profileId
      );
      if (existingProfile) {
        existingProfile.reactions[reaction]++;
      }
    }, */
    profileUpdated: {
      reducer(state, action) {
        state.user = { ...state.user, ...action.payload.user };
      },
      prepare({ firstName }) {
        return {
          payload: {
            user: { firstName }
          }
        };
      }
    }
  }
});

export const {
  profileAdded,
  profileUpdated,
  profileClear /* reactionAdded */
} = profileSlice.actions;

export const selectProfile = (state) => state.user;
