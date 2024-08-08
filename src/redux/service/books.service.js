import axios from "axios";
import { CONSTANTS } from "../../constants";

export const GetBooks = (token) => {

    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };

    return axios.get(
        CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.GET_BOOKS,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

    ).then(onSuccess)
        .catch(onFailure);
};

export const GetBookDetail = (id, token) => {

    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return axios.get(
        CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.GET_BOOK + "/" + id,
        options
    ).then(onSuccess)
        .catch(onFailure);
};
export const GetMyBook = (token) => {

    const onSuccess = ({ data }) => {
        return data;
    };
    const onFailure = error => {
        throw error;
    };
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return axios.get(
        CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.MY_BOOKS,
        options
    ).then(onSuccess)
        .catch(onFailure);
};

