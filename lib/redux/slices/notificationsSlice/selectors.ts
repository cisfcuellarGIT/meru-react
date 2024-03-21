import type { ReduxState } from "@/lib/redux";

// The function below is called a selector and allows us to select a value from the state
export const selectError = (state: ReduxState) => state.notifications.error;
export const selectMessage = (state: ReduxState) => state.notifications.message;
