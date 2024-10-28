import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddStudents from './Components/AddStudents';
import Rankings from './Components/Rankings';
import LoginSignUp from './Components/LoginSignUp';
import ExpiaryCheacker from './Components/Wids/ExpiaryCheacker';
import DashBoard from './Components/DashBoard';
import Menu from './Components/Menu';

const router = createBrowserRouter([{
    path:"/",
    element:<div className=' h-screen w-screen bg-black/10 text-center'>Hello</div>
  },
  {
    path:"/AddStudents",
    element:<AddStudents/>
  },{
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
  }

])
const App:React.FC = () => {
  return (
    <>
      <ExpiaryCheacker/>
      <Menu/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
