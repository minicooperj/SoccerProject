import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(<CommentBox
url='https://serieux-chocolatine-37174.herokuapp.com/api/comments'
pollInterval={2000}/>,
document.getElementById('root'));
