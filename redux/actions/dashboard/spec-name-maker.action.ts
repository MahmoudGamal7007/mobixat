export const UpdateEnSpecNameAction = (input: string) => {
  return {
    type: "UPDATE_EN_SPEC_NAME",
    payload: input,
  };
};
export const UpdateArSpecNameAction = (input: string) => {
  return {
    type: "UPDATE_AR_SPEC_NAME",
    payload: input,
  };
};
