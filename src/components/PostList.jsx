import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import Loading from './Loading';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS_REQUEST' });
    }, [dispatch]);

    if (loading) {
        return <Loading />
    }

    const reversedPosts = [...posts].reverse();

    return (
        <div className="flex flex-col gap-2">
            {reversedPosts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default PostList;
