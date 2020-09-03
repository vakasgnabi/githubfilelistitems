import React from 'react';
import PropTypes from 'prop-types';


const CommitMessage=({commit})=>(
    <div className="col-md-6 commit-message">
    {commit.message}
    </div>
)

CommitMessage.propTypes={
    commit:PropTypes.object.isRequired
}

export default CommitMessage;