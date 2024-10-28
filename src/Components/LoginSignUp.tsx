import React, { useEffect, useState } from 'react'
import Header from './Wids/Header'
import url from './Constants';
import axios from 'axios';

const LoginSignUp:React.FC = () => {
    const [Department,setDepartment] = useState<string>("CSE");
    const [allDepts,setDepts] = useState<{
        departmentCode: string,
        departmentName: string
    }[]>();

    const [message,setMessage] = useState<string>("");

    const [page,setPG] = useState<number>(0);

    const [leetcode,setLeetCode] = useState<string>("");
    const [CodeChef,setCodeChef] = useState<string>("");
    const [GfG,setGfG] = useState<string>("");
    const [HackerRank,setHackerRank] = useState<string>("");

    const [roll,setRoll] = useState<string>("");
    const [Name,setName] = useState<string>("");
    const [Password,setPassword] = useState<string>("");


    useEffect(()=>{
        axios.get(url+"/get-departments")
            .then((res)=>{
                console.log(res.data);
                setDepts(res.data);
            })
            .catch((er)=>{
                console.log(er);
            })
    },[])

    useEffect(()=>{
        if(localStorage.getItem('uhhnjX56g7009ijhvjjycb8yubuibsd')==='true'){
            window.location.href='/Rankings';
        }
    },[])

    const updateUser = (RollNumber:string) =>{
        axios.post(url+'/update_user',{RollNumber})
        .then((res)=>{
            console.log(res.data);
        })
        .catch((er)=>{
            console.log(er);
        })
    }

    // useEffect(()=>{
    //     console.log(Department);
    // },[Department]);

    const login = () => {
        if(roll.length === 10){
            if(Password.length >= 8){
                axios.post(url+'/login',{
                    RollNumber:roll,
                    Password:Password
                })
                .then((res)=>{
                    console.log(res.data);
                    if(res.data.message === 'Correct'){
                        setMessage("✅ Login Success.")
                        localStorage.setItem('J99JX223edqwnjuhpiywgvcKIKBAS',res.data.expire_time);
                        localStorage.setItem('uhhnjX56g7009ijhvjjycb8yubuibsd','true');
                        localStorage.setItem('rollafsamsdkjbnnsan_9U9jvobdS',roll);
                        updateUser(roll);
                        setTimeout(()=>{
                            setMessage('');
                        },1700);
                    }
                    else {
                        if(res.data.message === 'Wrong Password'){
                            setPassword('');
                            setMessage("⚠️ Incorrect Password !")
                            setTimeout(()=>{
                                setMessage('');
                            },1700);
                        }
                    }
                })
                .catch((err)=>{
                    console.log(err.response.data.message);
                    setMessage(err.response.data.message)
                    setTimeout(()=>{
                        setMessage('');
                    },1700);
                })
            }
            else{
                setMessage("Password should atleast have 8 characters.")
                    setTimeout(()=>{
                        setMessage('');
                    },1700);
            }
        }
        else{
            setMessage("Roll-Number should have 10 characters."+roll.length)
                setTimeout(()=>{
                    setMessage('');
                },1700);
        }
    }

    const register = () =>{
        if(roll.length === 10){
            if(Password.length >= 8){
                if(Name.trim().length >= 5){
                    axios.post(url+'/register',{ 
                        RollNumber:roll,
                        Name,
                        Department,
                        leetcode,
                        CodeChef,
                        HackerRank,
                        GfG,
                        Password } 
                ).then((res)=>{
                    console.log(res.data);
                    setMessage(res.data.message);
                    setTimeout(()=>{
                        setMessage('');
                    },1700);
                })
                .catch((err)=>{
                    console.log(err.response.data);
                    console.log(err.response.data.message);
                    if(err.response.data.message){
                        setMessage(err.response.data.message)
                        setTimeout(()=>{
                            setMessage('');
                        },1700);
                    }
                    else{
                        if(err.response.data === 'SQLITE_CONSTRAINT: SQLite error: UNIQUE constraint failed: Student_Data.RollNumber'){
                            setMessage('User already exist, Please contact Admin')
                            setTimeout(()=>{
                                setMessage('');
                            },1700);   
                        }
                    }
                })
                }else{
                setMessage("Suspisious name should atleast have 5 characters.")
                    setTimeout(()=>{
                        setMessage('');
                    },1700);
            }
            }
            else{
                setMessage("Password should atleast have 8 characters.")
                    setTimeout(()=>{
                        setMessage('');
                    },1700);
            }
        }
        else{
            setMessage("Roll-Number should have 10 characters."+roll.length)
                setTimeout(()=>{
                    setMessage('');
                },1700);
        }
    }
  return (
    <div className=' h-screen w-screen bg-[#fffcf7]
    flex items-center justify-center'>
        <Header/>
        {page === 0 ?
        <div className=' border bg-[#fff] h-[500px] w-[700px] 
        rounded-xl shadow-xl flex items-center justify-center overflow-hidden   '>
            <div className=' h-full flex-1 bg-[#8f3249] 
            flex items-center justify-center text'>
                <p className=' text-white text-5xl font-4'>Login</p>
            </div>
            <div className=' h-full flex-1 tracking-widest flex pt-20 flex-col gap-6'>
                <div className=' pl-10 w-full flex flex-col gap-2'>
                    <p className=' font-thin'>Roll Number</p>
                    <input type="text"  value={roll}
                    onChange={(e)=>{
                        setRoll(e.target.value.trim().toUpperCase());
                    }}
                    className=' w-[80%] py-3 px-4 rounded-lg border
                      text-black font-extralight focus:font-normal '
                     name="username" placeholder='26951A05X9' />
                </div>
                <div className=' pl-10 w-full flex flex-col gap-2'>
                    <p className=' font-thin'>Password</p>
                    <input type="password"  value={Password}
                    onChange={(e)=>{
                        setPassword(e.target.value.trim());
                    }}
                    className=' w-[80%] py-3 px-4 rounded-lg border
                      text-black font-extralight focus:font-normal '
                     name="username" placeholder='Qw#4</Op39' />
                </div>
                <div className=' w-full flex items-center justify-center mt-11'>
                    <div onClick={()=>{
                        login();
                    }}
                     className=' w-fit px-4 bg-[#8f3249] py-2 rounded-lg 
                     hover:cursor-pointer text-white font-4 active:scale-90 
                     transition-all'>
                        Login
                    </div>
                </div>
                <div className=' text-orange-700 text-sm tracking-wide text-center'>
                    <pre>
                        {message}
                    </pre>
                </div>
            </div>
        </div>
        :
        <div className=' border bg-[#fff] h-[600px] w-[1000px] 
        rounded-xl shadow-xl flex items-center justify-center overflow-hidden   '>
            <div className=' h-full w-[40%] bg-[#8f3249] 
            flex items-center justify-center text'>
                <p className=' text-white text-5xl font-4'>Register</p>
            </div>
            <div className=' h-full flex-1 tracking-widest flex pt-8 flex-col gap-5 px-10'>

                <div className=' r1 flex '>
                    <div className='w-full flex flex-col gap-2'>
                        <p className=' font-thin'>Name</p>
                        <input type="text" value={Name}
                        onChange={(e)=>{
                            setName(e.target.value.toUpperCase());
                        }}
                        className=' w-[80%] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal '
                        name="username" placeholder='Monkey D luffy' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className=' font-thin'>Roll Number</p>
                        <input type="text"  value={roll}
                        onChange={(e)=>{
                            setRoll(e.target.value.trim().toUpperCase());
                        }}
                        className=' w-[80%] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal '
                        name="username" placeholder='26951A05X9' />
                    </div>
                </div>
                <div className=' r1 flex items-center '>
                    <div className=' flex relative  flex-col gap-1 '>
                        <p className='font-thin'>Department</p>
                        <select defaultValue={""} value={Department} 
                            onChange={(e)=>{
                                setDepartment(e.target.value);
                            }}
                            className=" w-[80%] min-w-[220px] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal ">
                                        {
                                            allDepts?.map((ele,idx)=>
                                                <option value={ele.departmentCode}>{ele.departmentName}</option>
                                            )
                                        }
                        </select>
                    </div>
                    <div className='   w-full flex flex-col gap-2'>
                        <p className=' font-thin'>Password</p>
                        <input type="password"  value={Password}
                        onChange={(e)=>{
                            setPassword(e.target.value.trim());
                        }}
                        className=' w-[80%] min-w-[220px] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal '
                        name="username" placeholder='Qw#4</Op39' />
                    </div>
                </div>
                
                <div className=' r1 flex '>
                    <div className=' flex relative w-[250px] flex-col gap-1 '>
                        <p className=' font-thin'>LeetCode username</p>
                        <input value={leetcode}
                        onChange={(e)=>{
                            setLeetCode(e.target.value.trim());
                        }} placeholder='tomxcx90'
                        type="text" className=" w-[80%] min-w-[220px] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal" />
                    </div>
                    <div className=' flex relative w-[250px] flex-col gap-1 '>
                        <p className=' font-thin'>CodeChef username</p>
                        <input value={CodeChef}
                        onChange={(e)=>{
                            setCodeChef(e.target.value.trim());
                        }} placeholder='jerry778'
                        type="text" className=" w-[80%] min-w-[220px] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal" />
                    </div>
                </div>
                <div className=' r1 flex '>
                    <div className=' flex relative w-[250px] flex-col gap-1 '>
                        <p className=' font-thin'>HackerRank username</p>
                        <input value={HackerRank}
                        onChange={(e)=>{
                            setHackerRank(e.target.value.trim());
                        }} placeholder='zoro897c'
                        type="text" className=" w-[80%] min-w-[220px] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal" />
                    </div>
                    <div className=' flex relative w-[250px] flex-col gap-1 '>
                        <p className=' font-thin'>GeekForGeeks username</p>
                        <input value={GfG}
                        onChange={(e)=>{
                            setGfG(e.target.value.trim());
                        }} placeholder='chopper33'
                        type="text" className=" w-[80%] min-w-[220px] py-3 px-4 rounded-lg border
                        text-black font-extralight focus:font-normal" />
                    </div>
                </div>
                <div className=' w-full flex items-center justify-center mt-11'>
                <div onClick={()=>{
                        register();
                    }}
                     className=' w-fit px-4 bg-[#8f3249] py-2 rounded-lg 
                     hover:cursor-pointer text-white font-4 active:scale-90 
                     transition-all'>                        Resister
                    </div>
                </div>
                <div className=' text-center text-orange-700 text-sm tracking-wide ml-2'>
                    <pre>
                    {message}
                    </pre>
                </div>
            </div>
        </div>
        }

        {
            page === 0 ?  
                <button onClick={()=>{setPG(1)}} className='  fixed bottom-5 right-5'>
                    SignUp ?
                </button>
                    :
                <button onClick={()=>{setPG(0)}} className='  fixed bottom-5 right-5'>
                    Login ?
                </button>
        }
    </div>
  )
}

export default LoginSignUp