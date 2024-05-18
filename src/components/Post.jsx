import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const Post = ({ id, title, body }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedBody, setEditedBody] = useState(body);
  const optionsRef = useRef(null);
  const dispatch = useDispatch();

  const toggleOptions = () => {
    setShowOptions(prevShowOptions => !prevShowOptions);
  };

  const toggleEditModal = () => {
    setShowEditModal(prevShowEditModal => !prevShowEditModal);
    setShowOptions(false);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_POST_REQUEST', payload: id });
  };

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE_POST_REQUEST', payload: { id, title: editedTitle, body: editedBody } });
    setShowEditModal(false);
  };

  return (
    <div className="border rounded p-4">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <img className="bg-contain rounded-full h-[3rem] w-[3rem]" src="https://avatars.githubusercontent.com/u/5502029?v=4" alt="Profile" />
          <div>
            <h1 className="font-bold">JSONPlaceholder</h1>
            <p className='text-gray-500 text-sm'>Free fake and reliable API for testing and prototyping.
              Powered by JSON Server + LowDB.</p>
          </div>
        </div>
        <div className="relative">
          <div className="cursor-pointer more-options" onClick={toggleOptions}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
          {showOptions && (
            <div ref={optionsRef} className="absolute bg-white shadow rounded mt-2 right-0">
              <p className="flex gap-2 cursor-pointer py-2 pl-3 pr-10 hover:bg-gray-200 whitespace-nowrap mb-4" onClick={toggleEditModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
                Edit Post
              </p>
              <p onClick={handleDelete} className="flex gap-2 cursor-pointer py-2 pl-3 pr-10 hover:bg-gray-200 whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                Delete Post
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <p>{body}</p>
      </div>
      {showEditModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <input type="text" value={editedTitle} onChange={e => setEditedTitle(e.target.value)} className="border rounded mb-2 p-2 w-full" />
            <textarea value={editedBody} onChange={e => setEditedBody(e.target.value)} className="border rounded p-2 w-full h-24" />
            <div className="flex justify-end">
              <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Update</button>
              <button onClick={toggleEditModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;

