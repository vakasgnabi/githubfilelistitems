import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({time})=>{
    const timeString = moment(time).fromNow();
    return (
        <div className="col-md-3 time age">
            {timeString}
        </div>
    );
};

Time.propTypes={
    time:PropTypes.string.isRequired,
    
};

export default Time;