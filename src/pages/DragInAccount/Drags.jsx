


import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Spin, Upload } from 'antd';
import { FaBox, FaCloud, FaDochub, FaDropbox, FaGoogleDrive, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// const props = {
//     name: 'file',
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`);
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
// };

const Drags = () => {
    return (
        <div>
            <div>

                <h1 className='text-3xl'>Create New Document</h1>
                <hr className='my-5'/>
                <div>
                    <input type="text" name="" id="" />
                </div>
                <div className='grid lg:grid-cols-2  gap-0'>
                    <div className='w-3/5  justify-center items-center'>
                        <div className='border rounded-md mt-8'>
                            <div className='border p-2 px-1   border-b-gray-300 inline-flex justify-center items-center gap-2 w-full'>
                                <Link className='inline-flex justify-center items-center gap-2 w-full font-bold text-xl'><FaDochub ></FaDochub> <p>your Document</p></Link>
                            </div>
                            <div className='border p-2 px-1  border-b-gray-300 inline-flex justify-center items-center gap-2 w-full'>
                               <Link className='inline-flex justify-center items-center gap-2 w-full font-bold text-xl'> <FaLink></FaLink> <p>URL</p></Link>
                            </div>
                            <div className='border p-2 px-1  border-b-gray-300 inline-flex justify-center items-center gap-2 w-full'>
                                <Link className='inline-flex justify-center items-center gap-2 w-full font-bold text-xl'><FaDropbox></FaDropbox> <p>Drop Box</p></Link>
                            </div>
                            <div className='border p-2 px-1  border-b-gray-300 inline-flex justify-center items-center gap-2 w-full'>
                               <Link className='inline-flex justify-center items-center gap-2 w-full font-bold text-xl'> <FaGoogleDrive></FaGoogleDrive> <p>Google Drive</p></Link>
                            </div>
                            <div className='border p-2 px-1  border-b-gray-300 inline-flex justify-center items-center gap-2 w-full'>
                                <Link className='inline-flex justify-center items-center gap-2 w-full font-bold text-xl'><FaCloud></FaCloud> <p>One Drive</p></Link>
                            </div>
                            <div className='border p-2 px-1  border-b-gray-300 inline-flex justify-center items-center gap-2 w-full'>
                               <Link className='inline-flex justify-center items-center gap-2 w-full font-bold text-xl'> <FaBox></FaBox></Link>
                            </div>

                        </div>
                    </div>
                    <div className=' w-full bg-white shadow-md p-3 mt-6 rounded-md'>
                        <h1 className='text-center font-bold text-3xl text-gray-600  mb-12'>Upload here your file to edit</h1>
                        <div
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                // display: 'flex',
                                listType: 'picture',
                                height: '60vh'
                            }}
                            className='flex-col '
                        >

                            <div className='lg:w-full shadow-lg'>
                                <Upload.Dragger
                                    action='http://localhost:5173/'
                                    listType="picture"
                                    accept='.jpg, .jpeg, .doc'
                                    beforeUpload={(file) => {
                                        console.log({ file })
                                        return false
                                    }}

                                    defaultFileList={[
                                        {
                                            uid: 'abc',
                                            name: 'existing file.png',
                                            status: 'uploading',
                                            url: "https://www.google.com/",
                                            percent: 50
                                        }
                                    ]}

                                    iconRender={() => {
                                        return <Spin></Spin>
                                    }}

                                    progress={{
                                        strokeWidth: 3,
                                        strokeColor: {
                                            "0%": "#f0f",
                                            "100%": "#ff0"
                                        },

                                        style: { top: 12 },
                                    }}
                                >
                                    <Button>Drag & Drop the file</Button>
                                    <br />
                                    <br />

                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload.Dragger>
                            </div>
                            <div className='lg:mt-10 py-2 px-8'>
                                <button className=''>
                                    <Link to={'/editor'} className='text-3xl font-bold text-slate-500 btn bg-[#f1f4f4]'>Create a new document</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drags;