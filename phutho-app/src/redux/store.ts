import { configureStore } from '@reduxjs/toolkit';
import blogsApi from '../apis/blog';

const store = configureStore({
    reducer: {
        [blogsApi.reducerPath]: blogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            blogsApi.middleware,

        )
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;