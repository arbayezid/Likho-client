//  import { Button } from "antd";
import Container from "../shared/Container";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import html2pdf from 'html2pdf.js';
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotesText = () => {
    const [editorContent, setEditorContent] = useState(`

    <div className="p-25">
    <h1 className="text-center mb-15 text-2xl lg:text-5xl text-blue-950 font-poppins font-semibold">🚀 Join Us at the Likho Editor Guest Meetup! 🖋️ </h1>
  
    <p className="text-center text-gray-700 mb-5">📅 Date: [24 - Nov -2023] 🕒 Time: [06:00 PM (BD)] 📍 Location: [Westin, Gulshan, Dhaka]</p>
    
    <p className="mb-5">Calling all wordsmiths and storytellers! 📝✨</p>
    <p className="mb-5">Ready to dive into the world of words and creativity? The Likho Editor Guest Meetup is the place to be. Connect with fellow writers, editors, and content creators. 🤝</p>
    
    <ul className="mb-5">

    <p style=" margin: 10px 10px 5px; color: gray; font-size: 2rem;">📌 Highlights:</p>

      <p className="text-2xl font-semibold" ></P>
      <li>Engaging Workshops 📚</li>
      <li>Interactive Discussions 🗣️</li>
      <li>Networking Opportunities 🤝</li>
      <li>Inspiring Speakers 🎙️</li>
      <li>And much more! 🌟</li>
    </ul>
  
    <p className="mb-5">Don't miss out on this opportunity to enhance your writing skills, share your experiences, and be part of a dynamic community. See you there! 👥🚀</p>
    
    #LikhoMeetup #WritingCommunity #CreativeMinds
  </div>
`);

    // Register the background color format in Quill
    const BackgroundStyle = Quill.import('formats/background');
    Quill.register(BackgroundStyle, true);

    // In your component's JSX
    useEffect(() => {
        const editorContentDiv = document.getElementById('editor-content');
        if (editorContentDiv) {
            editorContentDiv.style.padding = '20px';
            editorContentDiv.style.textAlign = 'center';
            // Apply other styles as needed
        }
    }, []);

    // Function to handle changes in the editor content
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };




    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],
            [{ 'align': [] }],
            ['link', 'image', 'video'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['mathquill'],
            [{ 'header': '1' }, { 'header': '2' }],
            // Add a custom background color button
            [{ 'background': ['bg-blue-400', 'bg-red-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400'] }],
        ],
    };
    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'blockquote',
        'code-block', 'align', 'link', 'image', 'video', 'color', 'background', 'font', 'size', 'mathquill'
    ];



    return (
        <div className="bg-gray-200 font-poppins">
            <div className="pt-16 space-y-5 mb-8 px-4 md:px-0">

                <h1 className="text-blue-950 text-center font-semibold lg:text-4xl text-2xl">
                    A versatile rich text editor for all your needs
                </h1>
                <p className="text-center text-gray-700">
                    Likho Editor 7.1 empowers users to create diverse content in your app—documents, reports, emails, notes, and chats with ease.
                </p>

                <div className="flex justify-center items-center flex-wrap gap-4">
                    <Link to='/features'>
                        <button className="text-lg font-poppins px-4 bg-purple-700 hover:bg-purple-800 text-center text-white p-2 rounded-lg">
                            Take Explore
                        </button>
                    </Link>

                    <button className="text-lg font-poppins px-4 hover:bg-blue-100 text-center text-gray-700 font-semibold border border-gray-500 p-2 rounded-lg">
                        Docs Know
                    </button>
                </div>
            </div>

            <Container>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center pb-14">
                    {/* React Quill editor */}
                    <div className="p-4">
                        <ReactQuill
                            value={editorContent}
                            onChange={handleEditorChange}
                            modules={modules}
                            formats={formats}
                            
                        />
                    </div>


                    <div className="p-4">
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                Multipurpose
                            </div>
                            <div className="collapse-content">
                                <p>Likho Editor 7.1, the adaptable WYSIWYG HTML editor, suits a broad spectrum of applications. Whether it's creating comprehensive Word-like documents or streamlining toolbars for emails and instant messaging, it's got you covered.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                User friendly
                            </div>
                            <div className="collapse-content">
                                <p>Take advantage of seamless UX and modern UI with lots of productivity features, such as @mentions, auto-formatting, spell checking, keyboard support, and copy-pasting from MS Word.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                Features
                            </div>
                            <div className="collapse-content">
                                <p>Effortlessly edit documents with our feature-rich editor. Enjoy a seamless experience with tools for text formatting, real-time collaboration, version history tracking, and more. Whether it's creating reports, letters, or any text-based content, our editor simplifies the process and enhances productivity.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                How It Helps Users
                            </div>
                            <div className="collapse-content">
                                <p>Our document editing tools are designed with you in mind. Streamline your work, collaborate efficiently, and stay organized with features that help you create, edit, and manage documents effortlessly. Whether you're a student, professional, or anyone who works with documents, our user-friendly tools are here to make your tasks simpler and more productive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotesText;
