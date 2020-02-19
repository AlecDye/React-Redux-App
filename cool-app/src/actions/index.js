import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('http://xkcd.com/info.0.json')
        .then(res => {
            console.log(res);
            // dispatch({ type: UPDATE_COMIC, payload: res.data})
        })
        .catch(err => console.error('Error in fetching data from API', err))
}