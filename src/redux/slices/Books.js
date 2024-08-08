import { createSlice } from '@reduxjs/toolkit';
import { AddToFav, GetFavProducts, GetBooks, GetVariation, GetBookDetail, GetMyBook } from '../service/books.service';
import { SuccessAlert } from '../../utils/utils';



const initialState = {
    Books: [],
    filterProduct: []
};

export const getBooks = (token) => async (dispatch) => {
    try {

        const response = await GetBooks(token);
        return response

    } catch (error) {
        console.log("error===========>", error)
    };
};
export const getBookDetail = (id, token) => async (dispatch) => {
    try {

        const response = await GetBookDetail(id, token);
        return response

    } catch (error) {
        console.log("error===========>", error?.response?.data)
    };
};
export const myBooks = (token) => async (dispatch) => {
    try {

        const response = await GetMyBook(token);
        return response

    } catch (error) {
        console.log("error===========>", error?.response?.data)
    };
};



export const BookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        // saveProducts: (state, action) => {
        //     state.products = [...state.products, ...action.payload];
        // },
        saveBooks: (state, action) => {
            const newProducts = action.payload.filter(newProduct =>
                !state.Books.some(existingProduct => existingProduct.id === newProduct.id)
            );
            state.Books = [...state.Books, ...newProducts];
        },
        saveFilterBooks: (state, action) => {
            state.filterProduct = action.payload;
        },



    },
});

export const { saveBooks, saveFilterBooks } = BookSlice.actions;

export default BookSlice.reducer;