import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
// import { store, persistor } from './store';
// import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Routes/>
          <StatusBar style="auto" />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
