export type SWITCH_ACTION_TYPE =
  | { type: "activate"; payload: number }
  | { type: "deactivate"; payload: number }
  | { type: "switch"; next: boolean};

export const initialState = {
  onTurn: false,
  pageNumber: 1,
  onTurnPageInitial: 0
};

export const reducer = (state: typeof initialState, action: SWITCH_ACTION_TYPE) => {
  switch (action.type) {
    case "activate":
      return {
        ...state,
        onTurn: true,
        onTurnPageInitial: action.payload,
      };
    case "deactivate":
      return {
        ...state,
        onTurn: false,
        onTurnPageInitial: action.payload,
      };
    case "switch":
      return {
        ...state,
        pageNumber: action.next ? state.pageNumber + 1 : state.pageNumber - 1,
      };
  }
}

export const activateOnSwitch = (payload: number): SWITCH_ACTION_TYPE => (
  {
    type: "activate",
    payload: payload
  }
);

export const deactivateOnSwitch = (payload: number): SWITCH_ACTION_TYPE => (
  {
    type: "deactivate",
    payload: payload
  }
);

export const proceedSwitch = (next: boolean): SWITCH_ACTION_TYPE => (
  {
    type: "switch",
    next: next
  }
);
