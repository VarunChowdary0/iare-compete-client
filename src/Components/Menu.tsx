import React, { useState } from 'react';

const Menu: React.FC = () => {
    
    const [show,setShow] = useState<boolean>(false);
    return (
    

    <>
        <div className=' hidden max-sm:block'>
            <div className={` w-full  transition-all fixed bottom-[0.75rem] backdrop-blur-lg z-[2000]
             left-0 right-0 top-auto flex justify-center items-center gap-6`}>
                <div className=' w-[90%] bg-[#000000]/80
                rounded-full h-[62px] box-border flex items-center justify-center'></div>
            </div>
        </div>
    </>
    
  );
};

export default Menu;
