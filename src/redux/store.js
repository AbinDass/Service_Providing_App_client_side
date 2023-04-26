import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { userSlice } from "./slice/userslice";
import { postSlice } from "./slice/postslice";
import { searchSlice } from "./slice/searchslice";
import { socketSlice } from "./slice/socketSlice";
import { appointmentSlice } from "./slice/appointmentslice";

const persistConfig = { key: "user", storage, version: 1 };
const persistConfigPost = { key: "post", storage, version: 1 };
const persistConfigSearch = { key: "search", storage, version: 1 };
const persistConfigSocket = { key: "socket", storage, version: 1 };
const persistConfigAppointment = { key: "appointment", storage, version: 1 };

const UserpersistedReducer = persistReducer(persistConfig, userSlice.reducer);
const PostpersistedReducer = persistReducer(persistConfigPost, postSlice.reducer);
const SearchpersistedReducer = persistReducer(persistConfigSearch, searchSlice.reducer);
const SocketpersistedReducer = persistReducer(persistConfigSocket, socketSlice.reducer);
const AppointmentpersistedReducer = persistReducer(persistConfigAppointment, appointmentSlice.reducer);

export const store = configureStore({
    reducer: {
        user: UserpersistedReducer,
        post: PostpersistedReducer,
        search: SearchpersistedReducer,
        socket: SocketpersistedReducer,
        appointment:AppointmentpersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
