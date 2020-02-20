import { FETCH_DATA, UPDATE_COMIC, SET_ERROR } from "../actions";

//* comic array contains ALL the API data
const initialState = {
    comic: [],
    isFetchingData: false,
    error: ''
    // comic: [{
    //     title: '',
    //     img: '',
    //     alt: '',
    //     isFetchingData: false,
    //     error: ''
    // }]
}

export const comicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                comic: []
            }
        case UPDATE_COMIC:
            return {
                ...state,
                comic: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
}