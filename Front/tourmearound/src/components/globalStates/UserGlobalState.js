import { createGlobalState } from "react-hooks-global-state";
const { setGlobalState, useGlobalState } = createGlobalState({
  user: "no",
  organisation: "no",
});
export { setGlobalState, useGlobalState };
