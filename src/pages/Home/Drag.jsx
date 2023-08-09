


import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const Drag = () => {
    return (
        <div
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                height: '100vh'
            }}
        >
            <Upload.Dragger action='http://localhost:5173/'>
                <Button>Drag & Drop the file</Button>
                <br />

                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload.Dragger>
        </div>
    );
};

export default Drag;