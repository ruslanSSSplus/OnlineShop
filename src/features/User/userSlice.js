import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../Utils/constants";

// export const getCategories = createAsyncThunk('categories/getCategories',
//     async(_, thunkAPI) => {
//         try{
//             const res = await axios(`${BASE_URL}/categories`)
//             const response = res.data.slice(0, 5)
//             return response
//         } catch (err) {
//             console.log(err)
//             return thunkAPI.rejectWithValue(err)
//         }
//     } )


const userSlice = createSlice({
    name: 'categories',
    initialState: {
        currentUser: [] ,
        cart: [] ,

    },
    reducers: {
        addItemToCart: (state, {payload}) => {

        }
    },
    extraReducers: (builder => {
        // todo добавить лоадер
        // builder.addCase(getCategories.fulfilled, (state, action) => {
        //     state.list = action.payload
        // })
    })
})

export default userSlice.reducer