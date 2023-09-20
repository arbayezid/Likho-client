import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import MainLayout from "../Layout/MainLayout";
import { v4 as uuid } from 'uuid'



import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Editor from "../pages/Editor/Editor/Editor";

import Dashboard from "../pages/Dashboard/Dashboard";
import ProfileDetails from "../pages/Profile/ProfileDetails";
import MyProfile from "../pages/Profile/MyProfile";
import ForgotPassword from "../pages/Home/ForgotPassword/ForgotPassword";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import ChatContainer from "../pages/RealTimeChatInfo/ChatContainer";
import Blog from "../pages/shared/Blog/Blog";

import DashBoardSent from "../pages/Dashboard/DashBoardSent/DashBoardSent";
import DashBoardInbox from "../pages/Dashboard/DashBoardInbox/DashBoardInbox";
import DashBoardTemplate from "../pages/Dashboard/DashBoardTemplate/DashBoardTemplate";
import DashDocument from "../pages/DashDocument/DashDocument";

import CustomEditor from "../pages/Dashboard/PersonalDashboard/CustomEditor/CustomEditor";
import Drag from "../pages/Drag&Drop/Drag";
import Drags from "../pages/DragInAccount/Drags";
import VideoHomepage from "../pages/VideoChat/VideoHomepage";
import VideoRoompage from "../pages/VideoChat/VideoRoompage";
import DocEditor from "../pages/Final-Editor/DocEditor";
import Navbar from "../pages/Navbar/Navbar";
import Features from "../pages/LikhoEditor7.1/Features/Features";
import CreateBlog from "../pages/CreateBlog/CreateBlog";
import MathFeatures from "../pages/LikhoEditor7.1/Features/MathFeatures";
import TemplatesDemo from "../pages/TemplatesDemo/TemplatesDemo";
import TemplatesDetails from "../pages/TemplatesDemo/TemplatesDetails";
import ErrorPage from "../pages/Error/ErrorPage";
import Stats from "../pages/Dashboard/AdminDashBoard/Stats/Stats";
import AllUser from "../pages/Dashboard/AdminDashBoard/AllUser/AllUser";
import ContactUs from "../pages/Contact Us/ContactUs";
import Help from "../pages/Help Center/Help";
import DemoPage from "../DemoPage/DemoPage";
import SingleDemo from "../DemoPage/SingleDemo";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/navbar",
        element: <Navbar></Navbar>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/reset-password',
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: '/profile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/customeditor',
        element: <CustomEditor></CustomEditor>
      },
      {
        path: '/doc',
        element: <DocEditor></DocEditor>
      },
      {
        path: '/',
        element: <Navigate replace to={`/doc/${uuid()}`} />
      },
      {
        path: '/profile/:id',
        element: <MyProfile></MyProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: 'template',
        element: <DashBoardTemplate></DashBoardTemplate>
      },
      {
        path: '/editor',
        element: <Editor></Editor>
      },
      {
        path: "/updateProfile/:id",
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: "/chat",
        element: <ChatContainer></ChatContainer>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'mathfeatures',
        element: <MathFeatures></MathFeatures>
      },

      {
        path: 'dash',
        element: ''
      },
      {
        path: "/room",
        element: <VideoHomepage></VideoHomepage>
      },
      {
        path: "/room/:roomID",
        element: <VideoRoompage></VideoRoompage>
      },
      {
        path: '/features',
        element: <Features></Features>
      },
      {
        path: '/demo',
        element: <DemoPage></DemoPage>
      },
      {
        path: '/demopage/:id',
        element:<SingleDemo></SingleDemo>,
          loader: ({params}) =>fetch(`http://localhost:5000/demo/${params.id}`)
        
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/help",
        element: <Help></Help>
      },
      {
        path: 'templatesdemo',
        element: <TemplatesDemo></TemplatesDemo>
      },
      {
        path: 'templatesdetails/:id',
        element: <TemplatesDetails></TemplatesDetails>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'newDoc',
        element: <Drags></Drags>
      },
      {
        path: 'inbox',
        element: <DashBoardInbox></DashBoardInbox>
      },

      {
        path: 'sent',
        element: <DashBoardSent></DashBoardSent>
      },
      {
        path: 'document',
        element: <DashDocument></DashDocument>
      },
      {
        path: 'sent',
        element: <DashBoardSent></DashBoardSent>
      },
      {
        path: 'setting',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path:'template',
        element:<DashBoardTemplate></DashBoardTemplate>
      },
      {
        path:'alluser',
        element:<AllUser></AllUser>
      },
      {
        path:'stats',
        element:<Stats></Stats>
      }


    ]

  },
]);

export default router;