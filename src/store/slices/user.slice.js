import { createSlice } from '@reduxjs/toolkit';
import { userList } from '../../data'

export const userSlice = createSlice({
	name: 'users',
    initialState: userList,
    reducers: {
        
    }
})

export const {  } = userSlice.actions;

export default userSlice.reducer;