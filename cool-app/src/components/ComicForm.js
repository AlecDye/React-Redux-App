import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const ComicForm = props => {
    console.log("ComicForm props", props)
    // receiving "isFetchingData: false"

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    //* if fetch: true (loading message), if fetch: false (button)
    return (
        <>
            {''}
            {props.isFetchingData ? (
                <div>Loading give me a sec...</div>
            ) : (
                    <button onClick={handleGetData}>Get today's comic</button>
                )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(ComicForm);