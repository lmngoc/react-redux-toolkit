import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const fetchAllUser = createAsyncThunk(
    'users/fetchAllUser',
    async () => {
        const response = await axios.get("http://localhost:8080/users/allfsdfs");
        return response.data
    }
)

const initialState = {
    listUser: [],
    isLoading: false,
    isError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllUser.pending, (state, action) => {

                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {

                state.listUser = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllUser.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
            })

    },
})


export default userSlice.reducer