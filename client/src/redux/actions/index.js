import axios from "axios";

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOGS_DETAILS = 'GET_DOGS_DETAILS';
export const CREATE_DOG = 'CREATE_DOG';
export const DETELE_DOG = 'DELETE DOG';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_TEMPERAMENTS = 'FILTER_TEMPERAMENTS';
export const FILTER_SOURCE = 'FILTER_SOURCE';
export const ORDER = 'ORDER';
export const LOADING = 'LOADING';
export const LOADING_HOME = "LOADING_HOME"


export const getAllDogs = () => {
    return async function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
        .then(res => dispatch({type: GET_ALL_DOGS, payload: res.data}))
    }
};

export const getTemperaments = () => {
    return async function (dispatch) {
        return axios.get('http://localhost:3001/temperaments')
        .then(res => dispatch({type: GET_TEMPERAMENTS, payload: res.data}))
    }
};

export const filterByTemperament = (payload) => {
    return {
        type: FILTER_TEMPERAMENTS,
        payload
    }
};

export const filterSource = (payload) => {
    return {
        type: FILTER_SOURCE,
        payload
    }
};

export const getDogDetails = (id) => {
    return async function (dispatch) {
        const res = await axios.get(`http://localhost:3001/dogs/${id}`);
        return dispatch({ type: GET_DOGS_DETAILS, payload: res.data });
    }
};

export const order = (payload) => {
    return {
        type: ORDER,
        payload
    }
};

export const searchByName = (name) => {

    return async function (dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            return dispatch({ type: SEARCH_BY_NAME, payload: res.data });
        } catch (error) {
            console.log(error.response.data)
            return dispatch({type: SEARCH_BY_NAME, payload: error.response.data})
        }
    }
};

export const loading = (payload) => {
    return {
        type: LOADING,
        payload
    }
};

export const loadingHome = (payload) => {
    return {
        type: LOADING_HOME,
        payload
    }
}



