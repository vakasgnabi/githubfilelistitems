import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './Time';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import './index.css';


const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Initial commit"
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Initial commit"
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: "Added a readme"
        }
    }
];


const FileList = ({ files }) => {
    return (
        <div className='container file-list'>
            {files.map(file => (
                <div className="row file-list-item" key={file.id}>
                    <FileListItem file={file} />
                    
                    
                </div>

            ))}

        </div>
    )
}

FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ({ file }) => {
    return (
        <>
        <FileName file={file}></FileName>
        <CommitMessage commit={file.latestCommit} />
        <Time time={file.updated_at} />
        </>
    )
};

FileListItem.propTypes={
    file:PropTypes.object.isRequired
}




function GitHubFileList({ files }) {
    return (
        <div className="container">

            <FileList files={files} />

        </div>
    )
}







ReactDOM.render(<GitHubFileList files={testFiles} />, document.querySelector('#root'));