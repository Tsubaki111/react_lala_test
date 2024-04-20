import { configureStore } from '@reduxjs/toolkit';
import timestampReducer from './timestampSlice';

export default configureStore({
  reducer: {
    timestamp: timestampReducer,
  },
});