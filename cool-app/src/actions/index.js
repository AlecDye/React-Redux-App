import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_COMIC = "UPDATE_COMIC";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json')
        .then(res => {
            console.log(res.data);
            dispatch({ type: UPDATE_COMIC, payload: res.data })
        })
        .catch(err => console.error('Error in fetching data from API', err))
}