import { configureStore } from '@reduxjs/toolkit';
import users from './slices/user.slice';

export default configureStore({
  reducer: {
    users,
	}
})