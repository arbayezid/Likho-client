import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './filterEdit.css';


// milan vs new
const FilterEdit = ({ templateInfo }) => {
  const {
    company,
    street,
    city,
    number,
    pro_name,
    date,
    overview,
    goals_1,
    goals_2,
    specifications,
    milestones,
    resources,
    glossary_of_terms,
  } = templateInfo;

  const [content, setContent] = useState('');

  useEffect(() => {
    // Create an HTML string containing the data with adjusted inline styles
    const htmlString = `
      <div id="container" style={{ gap: '7px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '10px' }}>${company}</h1>
        
        <p style={{ marginTop: '2.75rem', marginBottom: '8px' }}>${street}</p>
        <p style={{ marginBottom: '8px' }}>${city}</p>
        <p style={{ marginBottom: '8px' }}>${number}</p>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '16px' }}>${pro_name}</h1>
        <p style={{ marginBottom: '8px' }}>${date}</p>
        <p style={{ marginBottom: '8px' }}>${overview}</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '24px', marginBottom: '8px' }}>
          <li>${goals_1}</li>
          <li>${goals_2}</li>
        </ul>
        <p style={{ marginBottom: '8px' }}>${specifications}</p>
       
        <p style={{ marginBottom: '8px' }}>${milestones}</p>
        <p style={{ marginBottom: '8px' }}>${resources}</p>
        <p style={{ marginBottom: '8px' }}>${glossary_of_terms}</p>
      </div>
    `;

    setContent(htmlString);
  }, [templateInfo]);

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div style={{ marginTop: '2.75rem' }} className='bg-white font-poppins'>
      <ReactQuill className='bg-white font-poppins'
        style={{ marginTop: '2.75rem', padding: '20px 0 10px 0', margin: '0 10px 0 0' }}
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default FilterEdit;
