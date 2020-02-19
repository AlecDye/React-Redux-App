import React from 'react';
import { connect } from 'react-redux';

const ComicList = props => {
    console.log("ComicList props", props)

    return (
        <>
            {/* props.comic.map(comic => <div>{comic.title}</div>) */}
        </>
    )
}

const mapStateToProps = state => {
    return {
        comic: state.comic
    }
}

export default connect(mapStateToProps, {})(ComicList);