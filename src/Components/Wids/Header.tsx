import React from 'react'

const Header:React.FC = () => {
  return (
    <div className=' header fixed top-0 left-0 right-0 bg-[#8f3249] w-full h-[60px] flex items-center'>
            <div className=' h-fit w-fit bg-white px-3'>
                <a href="/">
                  <img className=' h-[60px]' src="/images.png" alt="" />
                </a>
            </div>
          <div className=' ml-5'>
              <p className=' text-white text-xl'>Institute of Aeronautical Engineering</p>
          </div>
    </div>
)
}

export default Header