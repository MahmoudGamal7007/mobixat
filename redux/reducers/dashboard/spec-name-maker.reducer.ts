import {
  SpecName_MinLength,
  SpecName_MaxLength,
} from "../../../libs/validation-constants/index.lib";
const initialState = {
  ar_spec_name: {
    value: "",
    isValid: false,
    isTouched: false,
    showHelper: false,
  },
  en_spec_name: {
    value: "",
    isValid: false,
    isTouched: false,
    showHelper: false,
  },
};

export const SpecNameReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "UPDATE_EN_SPEC_NAME":
      return {
        ...state,
        en_spec_name: {
          ...state.en_spec_name,
          value: action.payload,
          isTouched: true,
          isValid:
            action.payload.length < SpecName_MinLength ||
            action.payload.length > SpecName_MaxLength
              ? false
              : true,
          showHelper:
            action.payload.length < SpecName_MinLength ||
            action.payload.length > SpecName_MaxLength
              ? true
              : false,
        },
      };

    case "UPDATE_AR_SPEC_NAME":
      return {
        ...state,
        ar_spec_name: {
          ...state.ar_spec_name,
          value: action.payload,
          isTouched: true,
          isValid:
            action.payload.length < SpecName_MinLength ||
            action.payload.length > SpecName_MaxLength
              ? false
              : true,
          showHelper:
            action.payload.length < SpecName_MinLength ||
            action.payload.length > SpecName_MaxLength
              ? true
              : false,
        },
      };

    default:
      return state;
  }
};
