import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const {rout} = useParams();
    useEffect(()=>{
        document.title = '404 not found';
    },[]);
    
  return (
    <div className="h-screen w-screen text-5xl flex items-center justify-center">
      <div
        className="fixed top-[60px] bottom-0 left-0 right-0 flex-col
       max-sm:text-sm text-center max-sm:m:px-5 gap-10
        dark:text-[#7174c0] dark:bg-dark_dark_100
         max-sm:flex-col-reverse 
      flex items-center justify-center text-2xl bg-white"
      >
        <p className="max-sm:px-5">
          404 : The Page you are looking do not exist. 
        </p>
        <div>
          <video
            className="ml-10 max-sm:ml-0 max-sm:w-[300px]"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/404-page-5565540-4650907.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="items-center flex gap-2 justify-center">
          <p>ROUTE : </p>
          <span className="text-orange-600">{rout}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
