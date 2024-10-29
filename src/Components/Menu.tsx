import React, { useState } from "react";
import HomeIcon from "../Icons/HomeIcon";
import UserIcon from "../Icons/UserIcon";
import PeopleIcon from "../Icons/PeopleIcon";

const Menu: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const path = (window.location.pathname.toLowerCase());
  return (
    <>
    {/* {!show && <div onClick={()=>{setShow(true);
    }} className=" z-[3000] w-16 max-sm:hidden h-16 fixed top-16 left-5 bg-red-400"></div>}
    
    <div className={` ${show?' translate-x-0':' translate-x-[-150vw]'} 
     transition-all duration-300  max-sm:hidden z-[30000] fixed top-0 bottom-0 left-0 right-0 `}>
        <div className=" h-full w-full flex">
            <div className=" w-[20vw] shadow-lg items-center flex-col
            py-24 justify-around
             h-full bg-[#202020] flex">
                    
            </div>
            <div onClick={()=>{setShow(false)}} className=" flex-1 h-full ">
            </div>
        </div>
    </div> */}
      <div className=" hidden max-sm:block">
        <div
          className={` w-full  transition-all fixed bottom-[0.75rem] z-[2000]
             left-0 right-0 top-auto flex justify-center items-center gap-6`}
        >
          <div
            className=" w-[90%] shadow-2xl bg-[#000000]/80 backdrop-blur-sm
                rounded-full h-[52px]  flex items-center  justify-around px-7">
            <div>
                <a href="/">
                    <HomeIcon color={path==='/'?'white':'grey'} scale={1}/>
                </a>
            </div>
            <div>
                <a href="/Rankings">
                    <PeopleIcon color={path==='/rankings'?'white':'grey'} scale={1}/>
                </a>
            </div>
            <div>
                <HomeIcon color={path==='/'?'white':'grey'} scale={1}/>
            </div>
            <div>
                <HomeIcon color={path==='/'?'white':'grey'} scale={1}/>
            </div>
            <div>
                {localStorage.getItem('rollafsamsdkjbnnsan_9U9jvobdS')!==null?
                    <a href={"/user/"+localStorage.getItem('rollafsamsdkjbnnsan_9U9jvobdS')}>
                        <UserIcon color={path.startsWith("/user/")?'white':'grey'} scale={1}/>
                    </a>:
                        <a href={"/login"}>
                        <UserIcon color={path === "/login"?'white':'grey'} scale={1}/>
                        </a>                
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
