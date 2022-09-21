import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        categories: []
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
});

export const { setCategories } = appSlice.actions;

export const getCategories = (): any => {
    return (dispatch: any): void => {
        setTimeout(() => {
            dispatch(setCategories(['Drama', 'Shortfilm', 'Poet', 'Animation']))
        }, 3000);
    }
};

export default appSlice.reducer;