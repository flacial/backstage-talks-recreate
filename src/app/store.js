import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import ScrollSlice from '../features/ScrollSlice';

export default configureStore({
  reducer: {
    scroll: ScrollSlice,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
