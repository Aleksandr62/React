export const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log("prev", store.getState());

  const result = next(action);

  console.log("next", store.getState());

  return result;
};
