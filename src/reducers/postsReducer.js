const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
    case 'CREATE_POST_REQUEST':
    case 'UPDATE_POST_REQUEST':
    case 'DELETE_POST_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload };
    case 'CREATE_POST_SUCCESS':
      return { ...state, loading: false, posts: [...state.posts, action.payload] };
    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      };
    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case 'FETCH_POSTS_FAILURE':
    case 'CREATE_POST_FAILURE':
    case 'UPDATE_POST_FAILURE':
    case 'DELETE_POST_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
