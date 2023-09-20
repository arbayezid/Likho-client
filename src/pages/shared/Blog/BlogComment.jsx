import React, { useState } from 'react';

const BlogComment = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            // Create a new comment object with user's name and the comment content
            const comment = {
                userName: 'User Name', // Replace with the actual user's name
                content: newComment,
                timestamp: new Date().toLocaleString(),
            };

            // Add the new comment to the comments list
            setComments([...comments, comment]);

            // Clear the input field
            setNewComment('');
        }
    };

    return (
        <div className="comment-section lg:px-40">
            <h3 className='text-xl text-black font-semibold mb-5'>Comments</h3>
            <div className="comments-list">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p className="comment-user">{comment.userName}</p>
                        <p className="comment-content">{comment.content}</p>
                        <p className="comment-timestamp">{comment.timestamp}</p>
                    </div>
                ))}
            </div>
            <div className="comment-input">
                <textarea className='w-1/2 p-2 text-xl pb-44'
                    placeholder="Leave a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>

            </div>
            <button className='font-semibold mt-5 p-1 px-2 rounded-lg text-blue-950 bg-gray-300' onClick={handleCommentSubmit}>Submit</button>
        </div>
    );
};

export default BlogComment;
