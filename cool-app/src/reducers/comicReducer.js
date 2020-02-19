import { FETCH_DATA } from "../actions";

//* comic array contains ALL the API data (a single object)
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
                isFetchingData: true
            }
        default:
            return state;
    }
}