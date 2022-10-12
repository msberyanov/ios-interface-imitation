export type UNLOCK_ACTION_TYPE =
  | { type: "activate"; payload: number }
  | { type: "deactivate"; }
  | { type: "unlock"; };

export const initialState = {
  onUnlock: false,
  onUnlockTop: 0,
  unlocked: false
};

export const reducer = (state: typeof initialState, action: UNLOCK_ACTION_TYPE) => {
  switch (action.type) {
    case "activate":
      return {
        onUnlock: true,
        onUnlockTop: action.payload,
        unlocked: false
      };
    case "deactivate":
      return {
        ...initialState,
        unlocked: state.unlocked
      };
    case "unlock":
      return {
        ...initialState,
        unlocked: true
      };
  }
}

export const activateOnUnlock = (payload: number): UNLOCK_ACTION_TYPE => (
  {
    type: "activate",
    payload: payload
  }
);

export const deactivateOnUnlock = (): UNLOCK_ACTION_TYPE => (
  {
    type: "deactivate",
  }
);

export const unlock = (): UNLOCK_ACTION_TYPE => (
  {
    type: "unlock",
  }
);
