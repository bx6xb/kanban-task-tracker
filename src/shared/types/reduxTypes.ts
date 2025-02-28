import { store } from "../../app";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
