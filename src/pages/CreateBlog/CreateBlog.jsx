// client/src/components/CreateBlogPost.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [headings, setHeadings] = useState(['', '', '', '', '', '']);
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleHeadingChange = (level, text) => {
    const updatedHeadings = [...headings];
    updatedHeadings[level - 1] = text;
    setHeadings(updatedHeadings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('headings', JSON.stringify(headings));
      formData.append('description', description);
      formData.append('content', content);
      formData.append('image', image);

      const response = await axios.post('/http://localhost:5000/blogPosts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Blog post created:', response.data);

      // Clear form after successful submission
      setTitle('');
      setHeadings(['', '', '', '', '', '']);
      setDescription('');
      setContent('');
      setImage(null);
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <div className='bg-gray-100 py-10'>
      <div className='max-w-4xl mx-auto bg-white p-6 shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Create a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <label className='block mb-2'>
            Title:
            <input
              type='text'
              className='block w-full border border-gray-300 p-2 rounded mt-1'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          {Array.from({ length: 6 }, (_, index) => (
            <label key={index} className='block mb-2'>
              Heading {index + 1}:
              <input
                type='text'
                className='block w-full border border-gray-300 p-2 rounded mt-1'
                value={headings[index]}
                onChange={(e) => handleHeadingChange(index + 1, e.target.value)}
              />
            </label>
          ))}
          <label className='block mb-2'>
            Description:
            <input
              type='text'
              className='block w-full border border-gray-300 p-2 rounded mt-1'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label className='block mb-2'>
            Content:
            <textarea
              className='block w-full border border-gray-300 p-2 rounded mt-1'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <label className='block mb-2'>
            Image:
            <input
              type='file'
              accept='image/*'
              className='block mt-1'
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
