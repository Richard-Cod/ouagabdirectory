import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer  from 'app/redux/features/userSlice';
import viewModelsReducer  from 'app/redux/features/vms';
import homePageRReducer  from 'app/redux/features/homepageSlice';



// const store = configureStore({
//   reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
// })



export const store = configureStore({
  reducer: {
    user: userReducer,
    viewModels : viewModelsReducer,
    
    homePageReducer : homePageRReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;