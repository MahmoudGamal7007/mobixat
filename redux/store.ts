import { combineReducers, createStore } from "redux";
import { MakeGlossaryReducer } from "./reducers/dashboard/make-glossary.reducer";
import { SpecNameReducer } from "./reducers/dashboard/spec-name-maker.reducer";
const store = createStore(
  combineReducers({ MakeGlossaryReducer, SpecNameReducer })
);

export default store;
store.subscribe(() => {
  // console.table(store.getState().SpecNameReducer.en_spec_name.value);
});
