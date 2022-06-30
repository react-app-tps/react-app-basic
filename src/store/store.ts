import { configureStore } from '@reduxjs/toolkit'

import websiteReducer from 'features/website/index'
import accountReducer from 'features/user/accountSlice'

export const store = configureStore({
  reducer: {
    website: websiteReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
