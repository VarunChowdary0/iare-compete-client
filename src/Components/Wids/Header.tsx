import React from 'react'


const Header:React.FC = () => {
  const path = (window.location.pathname.toLowerCase());
  return (
    <div className={` header ${path==='/rankings' ? " z-0 ":" z-[1000] "} fixed top-0 left-0 right-0 bg-[#8f3249] w-full h-[60px] flex items-center`}>
            <div className=' h-[61px] w-fit bg-white px-3'>
                <a href="/">
                  <img className=' h-[60px] w-[70px] ' src="/images.png" alt="" />
                </a>
            </div>
          <div className=' ml-5 w-full max-w-[400px]'>
              <p className=' text-white text-xl max-sm:text-sm font-4'>Institute of Aeronautical Engineering</p>
          </div>
          <div className=' w-full bg-black/0 h-full max-sm:hidden flex justify-start 
          items-center px-5 gap-6 text-white flex-row-reverse mr-[150px]'>
                  {localStorage.getItem('rollafsamsdkjbnnsan_9U9jvobdS')!==null?
                              <a href={"/user/"+localStorage.getItem('rollafsamsdkjbnnsan_9U9jvobdS')}>
                                  <div className={` hover:scale-105 transition-all
                                    text-lg ${path.startsWith("/user/")?' underline text-sky-300':''} font-4`}>
                                      <p>Profile</p>
                                  </div>                        
                              </a>
                          :
                            <a href={"/login"}>
                            <div className={` hover:scale-105 transition-all
                               text-lg ${path==='/login'?' underline text-sky-300':''} font-4`}>
                                <p>Login</p>
                            </div>                             </a>                
                    }
                    <div className={` hover:scale-105 transition-all
                         text-lg ${path==='/settings'?'underline text-sky-300':''} font-4`}>
                        <a href="/Settings">Settings</a>
                    </div>
                    {/* <div className={` hover:scale-105 transition-all
                         text-lg ${path==='/'?' underline text-sky-300':''} font-4`}>
                        <a href="/">Home</a>
                    </div> */}
                    <div className={` hover:scale-105 transition-all
                         text-lg ${path==='/rankings'?'underline text-sky-300':''} font-4`}>
                        <a href="/Rankings">Rankings</a>
                    </div>
                    <div className={` hover:scale-105 transition-all
                         text-lg ${path==='/'?'underline text-sky-300':''} font-4`}>
                        <a href="/">Home</a>
                    </div>
                   
                   
                    
                    
                   
                    <p className=" text-[#727272] text-xl"></p>
                    <p className=" text-[#727272] text-md"></p>
          </div>
    </div>
)
}

export default Header