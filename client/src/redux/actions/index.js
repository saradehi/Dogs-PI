import axios from "axios";

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_DOGS_DETAILS = 'GET_DOGS_DETAILS';
export const CREATE_DOG = 'CREATE_DOG';
export const DETELE_DOG = 'DELETE DOG';
export const RESET_SEARCH = 'RESET_SEARCH'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';


export const getAllDogs = () => {
    return async function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
        .then(res => dispatch({type: GET_ALL_DOGS, payload: res.data}))
    }
}

