import { createGlobalState } from "react-hooks-global-state";
const { setOrganisationGlobalState, useOrganisationGlobalState } =
  createGlobalState({ id: "no" });
export { useOrganisationGlobalState, setOrganisationGlobalState };
