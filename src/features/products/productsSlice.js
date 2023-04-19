import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../Utils/constants";

export const getProducts = createAsyncThunk('products/getProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios(`${BASE_URL}/products`)
            return response.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    })


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        related: [],
    },
    extraReducers: (builder => {
        // todo добавить лоадер
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload
        })
    })
})

export default productsSlice.reducer