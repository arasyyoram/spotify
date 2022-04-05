export const tokenReducer = (state, action) => {
  switch (action.type) {
    case "accessToken":
      return {
        accessToken: action.payload,
      };

    default:
      return state;
  }
};
