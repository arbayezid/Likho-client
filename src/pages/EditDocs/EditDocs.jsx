import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Container from '../shared/Container';


const EditDocs = () => {
  const [editorHtml, setEditorHtml] = useState(`
    <p><span class="text-3xl font-bold">Welcome to </span><span class="text-3xl font-bold text-blue-600">Likho Docs!</span> This is a demo text to show how the editor works.</p>
  `);

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      [{ 'indent': '-1' }, { 'indent': '+1' }], // Indentation options
      [{ 'direction': 'rtl' }], // Right-to-left text direction
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'video'],
      ['clean'],
      ['table'], // Adding table button
      [{ 'script': 'sub' }, { 'script': 'super' }], // Subscript and superscript
      ['formula'], // Mathematical equation
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'align', 'indent',
    'color', 'background',
    'link', 'image', 'video', 'table', 'script', 'formula'
  ];

  return (


    <div className="bg-gradient-to-r from-gray-600 via-blue-900 to-blue-400 lg:mt-[-239px]">
      <Container>
        {/* <h2 className="text-center text-orange-200 font-bold text-5xl pt-8 lg:pt-28">
          Online Documents Editor
        </h2> */}
        <div className="flex flex-col-reverse   lg:flex-row lg:h-auto space-y-6 lg:space-y-0 lg:space-x-10 mx-auto pt-28 lg:pt-64 justify-center pb-10">



          <div className="w-full lg:w-1/2 p-4 lg:px-20 space-y-4 lg:space-y-6">

            <h2 className="text-2xl lg:text-5xl font-bold mb-2 text-gray-300">
              Build your best ideas together, in Likho Docs
            </h2>
            <p className="mb-4 text-white text-base">The Page Manager displays thumbnails of each page in your document, allowing you to rotate, delete, or reorder pages using drag and drop. Easily merge PDFs or other documents together with a simple click. This kind of functionality is quite common in PDF editing or management tools. It is often used when you need to manipulate the pages within a PDF document, whether it is for editing, organization, or combining multiple documents into one cohesive file.


            </p>
            <p className="mb-4 text-gray-200 text-base">
              Keep in mind that the exact features and user interface might vary depending on the software or application you are using. Some popular software that offers these capabilities includes Adobe Acrobat, PDF-XChange Editor, Foxit PhantomPDF, and various online PDF editors.</p>
            <button className="border-1 shadow-md border-blue-900 hover:border-blue-700 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg p-2 px-4 text-xl hover:animate-pulse font-semibold text-gray-200 transition-opacity duration-5000">Access Likho</button>

          </div>


          {/* Right Column */}
          <div className="w-full lg:w-1/2 p-4 border-3 rounded-md bg-white overflow-y-auto">
            <ReactQuill
              value={editorHtml}
              onChange={setEditorHtml}
              modules={modules}
              formats={formats}
              style={{ height: '100%', maxHeight: '500px' }}
              className="lg:max-h-[700px]"
            />
          </div>

        </div>
      </Container>
    </div>








  );
};

export default EditDocs;

