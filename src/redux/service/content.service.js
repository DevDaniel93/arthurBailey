import axios from "axios";
import { CONSTANTS } from "../../constants";

export const GetTermAndCondition = () => {
    const onSuccess = ({ data }) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    const options = {


    }
    return axios.get(
        CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.GET_CONTENT,
        options
    ).then(onSuccess)
        .catch(onFailure);
};


export const GetPrivacy = () => {
    const onSuccess = ({ data }) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    const options = {


    }
    return axios.get(
        CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.GET_CONTENT,
        options
    ).then(onSuccess)
        .catch(onFailure);
};


export const GetAboutUs = () => {
    const onSuccess = ({ data }) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    const options = {


    }
    return axios.get(
        CONSTANTS.API_URLS.BASE + CONSTANTS.API_URLS.GET_CONTENT,
        options
    ).then(onSuccess)
        .catch(onFailure);
};

