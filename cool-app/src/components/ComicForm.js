import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';

const ComicForm = props => {
    console.log("ComicForm props", props)

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return (
        <>
            <button onClick={handleGetData}>Get today's comic</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(ComicForm);