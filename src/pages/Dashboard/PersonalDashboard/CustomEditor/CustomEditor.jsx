import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EditorStyles.css'
import axios from 'axios';

function CustomEditor() {
    const [editorHtml, setEditorHtml] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    let synth = null;

    if ('speechSynthesis' in window) {
        synth = window.speechSynthesis;
    }

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setEditorHtml(editorHtml + transcript);
    };

    const handleVoiceButtonClick = () => {
        recognition.start();
    };

    const handleReadAloud = () => {
        if (synth) {
            const utterance = new SpeechSynthesisUtterance(editorHtml);
            synth.speak(utterance);
        } else {
            console.log('Speech synthesis is not available in this browser.');
        }
    };

    // for formating
    // const handleFileSelection = (event) => {
    //     const file = event.target.files[0];

    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         const fileContent = e.target.result;

    //         // Wrap the file content with HTML tags for basic formatting
    //         const formattedContent = `<div>${fileContent}</div>`;

    //         setEditorHtml(formattedContent);
    //     };
    //     reader.readAsText(file);


    // };

    const handleFileSelection = async (event) => {
        const file = event.target.files[0];
    
        if (file) {
          setSelectedFile(file);
    
          // Check file extension to handle different file types
          if (file.name.endsWith('.txt')) {
            // For .txt files, read and set content as plain text
            const reader = new FileReader();
            reader.onload = (e) => {
              const fileContent = e.target.result;
              setEditorHtml(fileContent);
            };
            reader.readAsText(file);
          } else if (file.name.endsWith('.docx')) {
            const formData = new FormData();
            formData.append('document', file);
    
            try {
              const response = await axios.post('http://localhost:5000/convert/docx2html', formData);
              const docxHtmlContent = response.data;
    
              // Display the HTML content with images in the editor
              setEditorHtml(docxHtmlContent);
            } catch (error) {
              console.error('Error converting .docx to HTML:', error);
            }
          }
        }
      };


    const handleDownload = () => {
        const blob = new Blob([editorHtml], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'edited_file.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shared File',
                    text: 'Check out this file',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.log('Web Share API not supported in this browser.');
        }
    };
    
    const handleDocxToPdfConversion = async () => {
        try {
            const formData = new FormData();
            formData.append('document', selectedFile);

            const response = await axios.post('http://localhost:5000/convert/docx2pdf', formData, {
                responseType: 'arraybuffer',
            });

            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfBlob);

            window.open(pdfUrl);
        } catch (error) {
            console.error('Error converting document to PDF:', error);
        }
    };

   

    


    const handleTextToPdfConversion = async () => {
        try {
          // Remove the <p> tags from the editorHtml content
          const sanitizedHtml = editorHtml.replace(/<\/?p>/g, '');
      
          const response = await axios.post(
            'http://localhost:5000/convert/text2pdf',
            { text: sanitizedHtml }, // Use sanitizedHtml instead of editorHtml
            {
              responseType: 'arraybuffer',
            }
          );
      
          const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
          const pdfUrl = URL.createObjectURL(pdfBlob);
      
          window.open(pdfUrl);
        } catch (error) {
          console.error('Error converting text to PDF:', error);
        }
      };
      



    const quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['file'], // Add the custom file button
        ],
        // ... Add more modules here if needed
    };

    const quillFormats = [
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'link', 'image', 'video'
        // ... Add more formats here if needed
    ];

    return (
        <div>

            <button className='px-2' onClick={handleVoiceButtonClick}>Start Voice</button>
            <button className='px-2' onClick={handleReadAloud}>Read Aloud</button>
            <input type="file" accept=".txt,.docx" onChange={handleFileSelection} />
            <button className='px-2' onClick={handleDownload}>Download</button>
            <button className='px-2' onClick={handleShare}>Share</button>
            <button className='px-2' onClick={handleDocxToPdfConversion}> Docx to PDF</button>
            <button className='px-2' onClick={handleTextToPdfConversion}>Text to PDF</button>

            <ReactQuill
                value={editorHtml}
                onChange={setEditorHtml}
                modules={quillModules}
                formats={quillFormats}
            />

        </div>
    );
}

export default CustomEditor;