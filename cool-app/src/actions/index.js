export const FETCH_DATA = "FETCH_DATA";

export const getData = store => next => action => {
    return {
        type: FETCH_DATA
    }
}