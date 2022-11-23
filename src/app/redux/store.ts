import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer  from 'app/redux/features/userSlice';
import viewModelsReducer  from 'app/redux/features/vms';

export const store = configureStore({
  reducer: {
    user: userReducer,
    viewModels : viewModelsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;