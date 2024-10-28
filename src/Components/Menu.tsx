import React, { useState } from 'react';

const Menu: React.FC = () => {
    
    const [show,setShow] = useState<boolean>(false);
    return (
    

    <>
        {/* {show? */}
        <div className={` ${show?'w-full':' w-0'} max-w-[90vw] transition-all fixed bottom-7 backdrop-blur-lg z-[2000]
            left-16 right-16 flex items-center gap-6`}>
            <div onClick={()=>{setShow(false)}} className=' h-16 w-16 rounded-full bg-black/50'></div>
            <div className=' w-full bg-[#2d2d2d]/50 border-2 border-black/30
            rounded-full h-16 flex items-center justify-center'></div>
        </div>
       {/* : */}
        <div onClick={()=>{setShow(true)}} className={`fixed bottom-7 z-[2000]
            left-16  h-16 w-16 bg-green-800 hover:cursor-pointer ${show?' hidden':''}
            rounded-full border-2  flex items-center justify-center`}>
                <p className=' font-4'>menu</p>
        </div>
        {/* } */}
    </>
    
  );
};

export default Menu;
