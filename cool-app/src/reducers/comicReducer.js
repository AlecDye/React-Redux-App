import { FETCH_DATA, UPDATE_COMIC } from "../actions";

//* comic array contains ALL the API data
const initialState = {
    comic: [],
    isFetchingData: false
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
                isFetchingData: true
            }
        case UPDATE_COMIC:
            return {
                ...state,
                comic: action.payload,
                isFetchingData: false
            }
        default:
            return state;
    }
}