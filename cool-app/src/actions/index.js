import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const getData = store => next => action => {
    dispatchEvent({ type: FETCH_DATA });
    axios
        .get('http://xkcd.com/info.0.json')
        .then(res => console.log(res))
        .catch(err => console.error('Error in fetching data from API', err))
}