import { createSlice } from "@reduxjs/toolkit";
export const cardslice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    counter: 0,
    cardData: [],
    score: 0,
  },
  reducers: {
    cardMatchs: (state, actions) => {
      if (
        String(Object.values(state.cards[0])) ===
        String(Object.values(state.cards[1]))
      ) {
        state.cards.map((item) => state.cardData.push(item));
        state.counter = 0;
        state.score += 1;
        state.cards = [];
      } else {
        state.cards.map((item) =>
          document.getElementById(Object.keys(item)).classList.remove("rotate")
        );
        state.cards = [];
      }
      state.counter = 0;
    },
    cardAdd: (state, actions) => {
      if (state.cardData.length >= 1) {
        if (
          !state.cardData.find(
            (item) =>
              String(Object.keys(item)) === String(Object.keys(actions.payload))
          )
        ) {
          document
            .getElementById(Object.keys(actions.payload))
            .classList.add("rotate");
          state.cards.push(actions.payload);
          state.counter += 1;
        }
      } else {
        document
          .getElementById(Object.keys(actions.payload))
          .classList.add("rotate");
        state.cards.push(actions.payload);
        state.counter += 1;
      }
    },
    restart: (state, actions) => {
      state.cardData.map((item) =>
        document.getElementById(Object.keys(item)).classList.remove("rotate")
      );
      state.cardData = [];
      state.cards = [];
      state.counter = 0;
      state.score = 0;
    },
  },
});
export const { cardMatchs, cardAdd, restart } = cardslice.actions;
export default cardslice.reducer;
