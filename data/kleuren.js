import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    kleur: "briljantrood",
    hexcode: "#f80000",
  },
  {
    id: nanoid(4),
    kleur: "zuivergroen",
    hexcode: "#008f39",
  },
];

const kleurSlice = createSlice({
  name: "kleurState",
  initialState,
  reducers: {
    voegKleur(state, action) {
      state.push({
        id: nanoid(4), //save it for later (etc.delete/filter)
        kleur: action.payload.kleur,
        hexcode: action.payload.hexcode,
      });
    },
  },
});

// each case under reducers becomes an action
export default kleurSlice;
export const { voegKleur } = kleurSlice.actions;
