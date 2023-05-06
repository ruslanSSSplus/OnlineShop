import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../Utils/constants";
import {shuffle} from "../../Utils/common";

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
    reducers: {
        filterByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(({price}) => price < payload);
        },
        getRelatedProducts: (state, { payload }) => {
            const list = state.list.filter(({ category: { id } }) => id === payload);
            state.related = shuffle(list);
        },
    },
    extraReducers: (builder => {
        // todo добавить лоадер
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload
        })
    })
})

export const {filterByPrice, getRelatedProducts} = productsSlice.actions

export default productsSlice.reducer