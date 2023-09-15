import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import React, { useEffect } from 'react';

const ResumeEditor = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('Initializing CKEditor');
      ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
          console.error(error);
        });
    });
  }, []);
  
  

  return (
    <div>
      <h1>Your CKEditor</h1>
      <div id="editor"></div>
    </div>
  );
};

export default ResumeEditor;
