import React from "react";
import { UNLOCK_ACTION_TYPE } from "../../hooks/use-unlock/unlock-actions";

export interface LockScreenContextProps {
  unlocked: boolean;
  onUnlock: boolean;
  dispatch: React.Dispatch<UNLOCK_ACTION_TYPE>;
  activateOnUnlock: (payload: number) => UNLOCK_ACTION_TYPE;
}

export const emptyLockScreenContext : LockScreenContextProps = {
  unlocked: false,
  onUnlock: false,
  dispatch: () => {},
  activateOnUnlock: () => ({} as UNLOCK_ACTION_TYPE)
}

export const LockScreenContext = React.createContext<LockScreenContextProps>(emptyLockScreenContext);
