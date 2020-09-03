import React from 'react';
import PropTypes from 'prop-types';


function FileName({file}){
    return(
        <div className="col-md-3 file-name">
           <FileNameFun file={file} />
        </div>
    )

}

function FileIcon({file}){
    let icon="fa-file-text-o";
    if(file.type==="folder"){
        icon = "fa-folder";
    }
    return(
        
            <i className={`fa ${icon}`} />
        

    );
}

FileIcon.propTypes={
    file:PropTypes.object.isRequired
}

function FileNameFun({file}){
    return(
        <>
        <FileIcon file={file} />
        {file.name}
        </>
    )
}

FileNameFun.propTypes={
    file:PropTypes.object.isRequired
}


export default FileName;