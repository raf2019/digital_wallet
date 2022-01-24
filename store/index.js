import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cardReducer from "./modules/cards/reducer";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['card']
// }
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['card']
// }

const reducers = combineReducers({
  card: cardReducer
});
// const reducers = combineReducers({
//   card: persistReducer(persistConfig, cardReducer)
// });

export const store = createStore(reducers);
// export const store = createStore(reducers, applyMiddleware(thunk));

// export const persistor = persistStore(store);