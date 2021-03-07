import {
  GlossaryName_MaxLength,
  GlossaryName_MinLength,
} from "../../../libs/validation-constants/index.lib";

const initialState = {
  en_name: {
    value: "",
    isValid: false,
    isTouched: false,
    showHelper: false,
  },
  ar_name: {
    value: "",
    isValid: false,
    isTouched: false,
    showHelper: false,
  },
  en_definition: {
    value: "",
  },
  ar_definition: {
    value: "",
  },
};

// ## REDUCER ##"UPDATE_EN_GLOSSARY_DEFINITION"
export const MakeGlossaryReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "UPDATE_EN_GLOSSARY_NAME":
      return {
        ...state,
        en_name: {
          ...state.en_name,
          value: action.payload,
          isTouched: true,
          isValid:
            action.payload.length < GlossaryName_MinLength ||
            action.payload.length > GlossaryName_MaxLength
              ? false
              : true,
          showHelper:
            action.payload.length < GlossaryName_MinLength ||
            action.payload.length > GlossaryName_MaxLength
              ? true
              : false,
        },
      };
    case "UPDATE_AR_GLOSSARY_NAME":
      return {
        ...state,
        ar_name: {
          ...state.ar_name,
          value: action.payload,
          isTouched: true,
          isValid:
            action.payload.length < GlossaryName_MinLength ||
            action.payload.length > GlossaryName_MaxLength
              ? false
              : true,
          showHelper:
            action.payload.length < GlossaryName_MinLength ||
            action.payload.length > GlossaryName_MaxLength
              ? true
              : false,
        },
      };
    case "UPDATE_EN_GLOSSARY_DEFINITION":
      return {
        ...state,
        en_definition: {
          ...state.en_definition,
          value: action.payload,
        },
      };
    case "UPDATE_AR_GLOSSARY_DEFINITION":
      return {
        ...state,
        ar_definition: {
          ...state.ar_definition,
          value: action.payload,
        },
      };
    default:
      return state;
  }
};
