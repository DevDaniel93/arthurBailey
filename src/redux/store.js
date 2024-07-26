import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from './slices/auth';
import CartReducer from './slices/Cart';



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

};

const rootReducer = combineReducers({

    Auth: AuthReducer,
    Cart: CartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            immutableCheck: false, // Disable ImmutableStateInvariantMiddleware
            serializableCheck: false, // Optionally disable other middleware checks
        });
    },

});

export const persistor = persistStore(store);