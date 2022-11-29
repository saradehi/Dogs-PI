import axios from "axios";

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOGS_DETAILS = 'GET_DOGS_DETAILS';
export const CREATE_DOG = 'CREATE_DOG';
export const DETELE_DOG = 'DELETE DOG';
export const RESET_SEARCH = 'RESET_SEARCH'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_TEMPERAMENTS = 'FILTER_TEMPERAMENTS';
export const FILTER_SOURCE = 'FILTER_SOURCE';
export const ORDER = 'ORDER'


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
        return axios.get(`http://localhost:3001/dogs/${id}`)
        .then (res => dispatch({type: GET_DOGS_DETAILS, payload: res.data}))
    }
};

export const order = (payload) => {
    return {
        type: ORDER,
        payload
    }
}

