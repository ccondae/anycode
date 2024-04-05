import { atom, useRecoilState } from "recoil";

import { ToastActionElement, ToastProps } from "./toast";

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

export type ActionType = typeof actionTypes;

export type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

export interface State {
  toasts: ToasterToast[];
}

export type Toast = Omit<ToasterToast, "id">;

const TOAST_LIMIT = 5;
const toastAtom = atom<State>({
  key: "toast",
  default: { toasts: [] },
});

export const useToast = () => {
  const [state, setState] = useRecoilState(toastAtom);
  const toast = (newToast: Omit<ToasterToast, "id">) => {
    setState((state) => ({
      toasts: [Object.assign(newToast, { id: new Date().toISOString() }), ...state.toasts].slice(0, TOAST_LIMIT),
    }));
  };
  return {
    toasts: state.toasts,
    toast,
  };
};
