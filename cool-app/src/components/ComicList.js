import React from 'react';
import { connect } from 'react-redux';

const ComicList = props => {
    console.log("ComicList props", props)

    return (
        <>{props.error ? (
            <div className="error">{props.error}</div>
        ) : (
                props.comic.map(comic => <div>
                    <h2>{comic.title}</h2>
                    <img src={comic.img} alt={comic.alt} />
                </div>)
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        comic: [state.comic]
    }
}

export default connect(mapStateToProps, {})(ComicList);