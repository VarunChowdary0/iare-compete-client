import React, { useEffect, useState } from 'react';
import ClockIcon from '../../Icons/ClockIcon';

const ExpiaryCheacker: React.FC = () => {
  const [logged, setLogged] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    const checkExpiration = () => {
      const expireTime = localStorage.getItem('J99JX223edqwnjuhpiywgvcKIKBAS');
      if (expireTime) {
        const currentTime = new Date().getTime();
        const expirationTime = new Date(expireTime).getTime();

        if (currentTime > expirationTime) {
          localStorage.clear();
          setLogged(false);
          console.log('Local storage cleared as the time has expired.');
          window.location.href='/login';
        } else {
          const timeDiff = expirationTime - currentTime;
          const minutes = Math.floor(timeDiff / (60 * 1000));
          const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);
          setTimeRemaining(`${minutes}m ${seconds}s`);
          setLogged(true);
        }
      } else {
        setLogged(false);
      }
    };

    if (localStorage.getItem('uhhnjX56g7009ijhvjjycb8yubuibsd') !== null) {
      checkExpiration();
    } else {
      setLogged(false);
    }

    const interval = setInterval(checkExpiration, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {logged ? (
        <div
          onClick={() => {
            localStorage.clear();
          }}
          className={`px-2 py-1 max-sm:top-11 max-sm:right-0 rounded-lg scale-75  w-fit
          fixed top-4 right-8 z-[2000] flex items-center hover:cursor-pointer
          ${
            timeRemaining < "10m 0s"
              ? " bg-[#ff5d18] text-white fill-white border-black"
              : "bg-[#ffffff]"
          }
          justify-center gap-2 border shadow-lg`}
        >
          <div className=" child h-2 w-2 bg-black rounded-full"></div>
          <ClockIcon height={20} width={20} />
          <p>{timeRemaining}</p>
          <svg className=' ml-1'
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7  0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0  32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64  0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7  14.3-32 32-32l64 0z"></path>
          </svg>
        </div>
      ) : (
        <div className="w-2 h-2 rounded-full bg-red-500 fixed top-7 right-10 max-sm:right-5 z-50 hover:flex"></div>
      )}
    </>
  );
}

export default ExpiaryCheacker;
