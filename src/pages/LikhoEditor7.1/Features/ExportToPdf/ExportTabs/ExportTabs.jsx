import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./ExportTabs.css"
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function ExportTabs() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [editorContent, setEditorContent] = React.useState(`
    <div className="p-5">
    <h1 className="text-center mb-5 text-2xl lg:text-5xl text-blue-950 font-poppins font-semibold">🚀 Join Us at the Likho Editor Guest Meetup! 🖋️</h1>
  
    <p className="text-center text-gray-700 mb-5">📅 Date: [24 - Nov -2023] 🕒 Time: [06:00 PM (BD)]</p>
    
    <p className="mb-5">Ready to dive into the world of words and creativity? The Likho Editor Guest Meetup is the place to be. Connect with fellow writers, editors, and content creators.</p>
    
    <ul className="mb-5">

    <p style=" margin: 10px 10px 5px; color: gray; font-size: 2rem;"> Highlights:</p>

      <p className="text-2xl font-semibold" ></P>
      <li>Engaging Workshops </li>
      <li>Interactive Discussions </li>
      <li>Networking Opportunities </li>
      <li>Inspiring Speakers </li>
      <li>And much more! </li>
    </ul>
  
    <p className="mb-5">Don't miss out on this opportunity to enhance your writing skills, share your experiences, and be part of a dynamic community. See you there! 👥🚀</p>
    
    #LikhoMeetup #WritingCommunity #CreativeMinds
  </div>
`);
    const [editorContentTwo, setEditorContentTwo] = React.useState(`
    <div className="p-5">
    <h1 className="text-center mb-5 text-2xl lg:text-5xl text-blue-950 font-poppins font-semibold">Export file in Docs Format and Play with Editor . </h1>
    
    <p className="mb-5">Ready to dive into the world of words and creativity? The Likho Editor Guest Meetup is the place to be. Connect with fellow writers, editors, and content creators.</p>
    
    <ul className="mb-5">

    <p style=" margin: 10px 10px 5px; color: gray; font-size: 2rem;"> Features :</p>

      <p className="text-2xl font-semibold" ></P>
      <li>Engaging Workshops </li>
      <li>Interactive Discussions </li>
      <li>And much more! </li>
      <li>And much more! </li>
      <li>And much more! </li>
      </ul>
      
    <p className="mb-5">Don't miss out on this opportunity to enhance your writing skills, share your experiences, and be part of a dynamic community. See you there!</p>
    
    #LikhoMeetup #WritingCommunity #CreativeMinds
  </div>
`);

// Register the background color format in Quill
const BackgroundStyle = Quill.import('formats/background');
Quill.register(BackgroundStyle, true);

    // In your component's JSX
    React.useEffect(() => {
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
    const handleEditorChangeTwo = (content) => {
        setEditorContentTwo(content);
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
        <div className=' py-12 bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 '>
            <Box className="text-white px-20"
                sx={{ flexGrow: 1, display: 'flex' }}
            >
                <Tabs
                    className ="tabscolor"
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Export To Pdf" className="tabs-color" {...a11yProps(0)} />
                        <Tab label="Export to Docs" className="tab-color" {...a11yProps(1)} />

                </Tabs>
                <TabPanel value={value} index={0}>
                <div className="p-4">
                        <ReactQuill
                            value={editorContent}
                            onChange={handleEditorChange}
                            modules={modules}
                            formats={formats}
                        />
                      
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <div className="p-4">
                        <ReactQuill
                            value={editorContentTwo}
                            onChange={handleEditorChange}
                            modules={modules}
                            formats={formats}
                        />
                      
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
}