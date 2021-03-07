export const UpdateEnGlossaryNameAction = (input: string) => {
  return {
    type: "UPDATE_EN_GLOSSARY_NAME",
    payload: input,
  };
};

export const UpdateArGlossaryNameAction = (input: string) => {
  return {
    type: "UPDATE_AR_GLOSSARY_NAME",
    payload: input,
  };
};
export const UpdateEnGlossaryDefinitionAction = (input: string) => {
  return {
    type: "UPDATE_EN_GLOSSARY_DEFINITION",
    payload: input,
  };
};

export const UpdateArGlossaryDefinitionAction = (input: string) => {
  return {
    type: "UPDATE_AR_GLOSSARY_DEFINITION",
    payload: input,
  };
};
