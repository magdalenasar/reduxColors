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
  {
    id: nanoid(4),
    kleur: "orhidee",
    hexcode: "#da70d6",
  },
];

const kleurSlice = createSlice({
  name: "kleurState",
  initialState,
  reducers: {
    voegKleur(state = initialState, { payload: { kleur, hexcode } }) {
      state.push({
        id: nanoid(4),
        kleur,
        hexcode,
      });
    },
    veranderKleur(state = initialState, { payload: { hexcode, id } }) {
      console.log(id);
      const objectToEdit = state.find((kleur) => kleur.id === id);
      objectToEdit.hexcode = hexcode;
    },
  },
});

// console.log(kleurSlice);

// each case under reducers becomes an action
export default kleurSlice;
export const { voegKleur, veranderKleur } = kleurSlice.actions;
