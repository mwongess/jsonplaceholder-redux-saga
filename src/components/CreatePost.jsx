import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreatePost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createPostHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'CREATE_POST_REQUEST', payload: { title, body } });
        setTitle('');
        setBody('');
    };

    return (
        <div>
            <form onSubmit={createPostHandler}>
                <div className="flex flex-col gap-2 rounded mb-4">
                    <input
                        type="text"
                        placeholder="Title"
                        className="text-lg font-bold"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        rows={1}
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
