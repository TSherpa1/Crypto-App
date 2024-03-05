import { createAction, createReducer } from "@reduxjs/toolkit";

const ACTION_ADD = "ACTION";

export const exampleReducer = createReducer([], (builder) => {
  builder.addCase(ACTION_ADD, (state, action: any) => {
    // "mutate" the array by calling push()
    state.push(action.payload);
    return state;
  });
});

export const actionAdd = createAction(ACTION_ADD);
