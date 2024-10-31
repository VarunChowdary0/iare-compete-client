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
      {
        logged ? (
          <div onClick={()=>{
            localStorage.clear();
          }} className={`px-2 py-1 max-sm:top-11 max-sm:right-0 rounded-lg scale-75  w-fit
          fixed top-4 right-10 z-[2000] flex items-center 
          ${timeRemaining < '10m 0s'?' bg-[#ff5d18] text-white fill-white border-black':'bg-[#ffffff]'}
          justify-center gap-2 border shadow-lg`}>
            <div className=' child h-2 w-2 bg-black rounded-full'></div>
            <ClockIcon height={20} width={20}/>
            <p>{timeRemaining}</p>
          </div>
        ) : (
          <div className='w-2 h-2 rounded-full bg-red-500 fixed top-7 right-10 max-sm:right-5 z-50 hover:flex'></div>
        )
      }
    </>
  );
}

export default ExpiaryCheacker;
