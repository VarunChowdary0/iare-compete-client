import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import AddStudents from './Components/AddStudents';
import Rankings from './Components/Rankings';
import LoginSignUp from './Components/LoginSignUp';
import ExpiaryCheacker from './Components/Wids/ExpiaryCheacker';
import DashBoard from './Components/DashBoard';
import Menu from './Components/Menu';
import HomePage from './HomePage';
import Header from './Components/Wids/Header';
import Settings from './Components/Settings';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([{
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/Rankings",
    element:<Rankings/>
  }
  ,{
    path:"/Login",
    element:<LoginSignUp/>
  }
  ,{
    path:"/user/:roll",
    element:<DashBoard/>
  },{
    path:"/settings",
    element:<Settings/>
  },{
    path:"/:rout",
    element:<ErrorPage/>
  }

])
const App:React.FC = () => {
  return (
    <>
      <Header/>
      <ExpiaryCheacker/>
      <Menu/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
