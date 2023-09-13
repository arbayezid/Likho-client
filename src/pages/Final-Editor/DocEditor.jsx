import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'

import '@emotion/styled'
import styled from '@emotion/styled';

import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Component = styled.div`
    background: #f5f5f5
`

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

const DocEditor = () => {

    const [quill, setQuill] = useState()

    const [socket, setSocket] = useState()
    const [selectedFile, setSelectedFile] = useState(null);


    const { id } = useParams()

    useEffect(() => {

        const quillServer = new Quill('#container', { theme: 'snow', modules: { toolbar: toolbarOptions } })
        quillServer.disable()

        quillServer.setText('Loading the document...')

        setQuill(quillServer)

    }, [])

    useEffect(() => {
        const socketServer = io('https://likho-backend.onrender.com')

        setSocket(socketServer)

        return () => {
            socketServer.disconnect()
        }
    }, [])

    useEffect(() => {

        if (socket === null || quill === null) return

        const handleChange = (delta, oldData, source) => {
            if (source !== 'user') return

            socket && socket.emit('send-changes', delta)
        }

        quill && quill.on('text-change', handleChange)

        return () => {
            quill && quill.off('text-change', handleChange)
        }

    }, [quill, socket])

    useEffect(() => {

        if (socket === null || quill === null) return

        const handleChange = (delta) => {

            quill.updateContents(delta)

        }

        socket && socket.on('receive-changes', handleChange)

        return () => {
            socket && socket.off('receive-changes', handleChange)
        }

    }, [quill, socket])

    useEffect(() => {
        if (quill === null || socket === null) return

        socket && socket.once('load-document', document => {
            quill && quill.setContents(document)
            quill && quill.enable()

        })

        socket && socket.emit('get-document', id)
    }, [quill, socket, id])

    useEffect(() => {
        if (quill === null || socket === null) return

        const interval = setInterval(() => {

            socket && socket.emit('save-document', quill.getContents())

        }, 2000)

        return () => {
            clearInterval(interval)
        }

    }, [quill, socket])

    const handleDocxToPdfConversion = async () => {
        try {
            const formData = new FormData();
            formData.append('document', selectedFile);

            const response = await axios.post('https://likho-backend.onrender.com/convert/docx2pdf', formData, {
                responseType: 'arraybuffer',
            });

            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfBlob);

            window.open(pdfUrl);
        } catch (error) {
            console.error('Error converting document to PDF:', error);
        }
    };

    return (
        <div>
            <button className='px-2'  onClick={handleDocxToPdfConversion}> Docx to PDF</button>
            <Component>
                <Box className='container' id='container'>

                </Box>
            </Component>
        </div>
    );
};

export default DocEditor;