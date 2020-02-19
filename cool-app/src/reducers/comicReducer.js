import { FETCH_DATA } from "../actions";

const initialState = {
    title: 'Game Theory',
    img: 'https://imgs.xkcd.com/comics/game_theory.png',
    alt: 'Wait, no, that one also loses. How about a nice game of chess?',
    isFetchingData: false,
    error: ''
}

//* default data for testing: https://xkcd.com/601/info.0.json

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