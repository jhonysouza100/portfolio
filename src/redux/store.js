import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeReducer'; // Ajusta la ubicación

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Otros reducers si los tienes
  },
});

export default store;
