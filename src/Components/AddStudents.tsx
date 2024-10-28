import axios from 'axios';
import React, { useEffect, useState } from 'react'
import url from './Constants';
 
const AddStudents:React.FC = () => {
    const [rollNo,setRollNo] = useState<string>("");
    const [StudentName,setStudentName] = useState<string>("");
    const [Department,setDepartment] = useState<string>("CSE");
    const [flasher,SetFlasher] = useState<string>("");

    const [leetcode,setLeetCode] = useState<string>("");
    const [CodeChef,setCodeChef] = useState<string>("");
    const [GfG,setGfG] = useState<string>("");
    const [HackerRank,setHackerRank] = useState<string>("");

    const [allDepts,setDepts] = useState<{
        departmentCode: string,
        departmentName: string
    }[]>();

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
        console.log(Department);
    },[Department]);


    const save = () => {
        const data = {
            RollNumber: rollNo.trim(),
            Name: StudentName.trim(),
            Department: Department.trim(),
            leetcode: leetcode.trim(),
            CodeChef: CodeChef.trim(),
            HackerRank: HackerRank.trim(),
            GfG: GfG.trim(),
        };
    
        if (rollNo.trim().length === 10 && StudentName.trim() !== "" && Department.length !== 0) {
            console.log(data);
            axios.post(url + "/addStudent", data)
                .then((res) => {
                    console.log(res);
                    SetFlasher("✅ Student added successfully");
                    setTimeout(() => {
                        SetFlasher("");
                    }, 1500);
                })
                .catch((err) => {
                    console.log(err);
                    SetFlasher("❌ Failed to add student, please try again later");
                    setTimeout(() => {
                        SetFlasher("");
                    }, 1500);
                });
        } else {
            console.log(rollNo.trim().length === 10 && StudentName.trim() !== "");
            SetFlasher("⚠️ Please fill all the fields correctly");
            setTimeout(() => {
                SetFlasher("");
            }, 1500);
        }
    };
    
  return (
    <div className='h-full min-h-screen bg-slate-500/0 flex items-center 
    justify-start flex-col w-full pt-16 px-10'>
      <div className='h-fit w-fit pt-10 px-14 flex items-center border-[#988f8f] 
          gap-2 border-[1px] rounded-xl p-4 max-sm:h-fit relative  max-sm:max-w-[100vw] max-w-[40vw]
          max-sm:mt-8 max-sm:gap-5 flex-col max-sm:items-center'>
        <div className=' flex items-center h-[160px] w-full justify-center '>
            <div className='w-[130px] h-full bg-black/50 overflow-hidden rounded-md'>
            {rollNo.length===10?  
            <img className=' w-full h-full' 
                  src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${rollNo}/${rollNo}.jpg`}
             alt="" />:
              <div className=' text-white font-thin h-full w-full flex items-center justify-center'>
                  Photo
              </div>
            }
            </div>
        </div>
        <div className='flex flex-wrap justify-between gap-10 max-sm:gap-7'>
          <div className='flex w-[250px] flex-col gap-1'>
            <p className='block text-sm font-medium leading-6 text-gray-900'>
              Student Roll Number
            </p>
            <input required id="roll" type="text"
            value={rollNo}
              onChange={(e) => {
                setRollNo(e.target.value.toUpperCase());
              }}
              className="block w-full rounded-md py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                            border-[1px] tracking-widest
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                            px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className='flex w-[250px] flex-col gap-1'>
            <p className='block text-sm font-medium leading-6 text-gray-900'>
              Student Name
            </p>
            <input required id="name" type="text"
            value={StudentName}
              onChange={(e) => {
                setStudentName(e.target.value.toUpperCase());
              }}
              className="block w-full rounded-md py-1.5
                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                            border-[1px] tracking-widest
                            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                            px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className='flex  w-full flex-wrap justify-between gap-10 max-sm:gap-7 mt-5'>
          <div className=' flex relative w-[250px] flex-col gap-1 '>
                <p className='block text-sm font-medium
                        leading-6 text-gray-900'>Department</p>
                <select defaultValue={""} value={Department} 
                    onChange={(e)=>{
                        setDepartment(e.target.value);
                    }}
                    className=" block max-sm:w-[80%] max-md:max-w-[10px] rounded-md py-1.5
                                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                                border-[1px] tracking-widest
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                {
                                    allDepts?.map((ele,idx)=>
                                        <option value={ele.departmentCode}>{ele.departmentName}</option>
                                    )
                                }
                </select>
            </div>
            <div className='flex  bg-black/0 h-fit w-full flex-wrap justify-center gap-5 max-sm:gap-7 mt-0'>
                <div className=' flex relative w-[250px] flex-col gap-1 '>
                    <p className='block text-sm font-medium
                            leading-6 text-gray-900'>LeetCode username</p>
                    <input value={leetcode}
                    onChange={(e)=>{
                        setLeetCode(e.target.value);
                    }}
                     type="text" className=" block max-sm:w-[80%] w-fit rounded-md py-1.5
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                                    border-[1px] tracking-widest
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex relative w-[250px] flex-col gap-1 '>
                    <p className='block text-sm font-medium
                            leading-6 text-gray-900'>CodeChef username</p>
                    <input type="text" value={CodeChef}
                    onChange={(e)=>{
                        setCodeChef(e.target.value);
                    }} className=" block max-sm:w-[80%] w-fit rounded-md py-1.5
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                                    border-[1px] tracking-widest
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex relative w-[250px] flex-col gap-1 '>
                    <p className='block text-sm font-medium
                            leading-6 text-gray-900'> GeekForGeeks username</p>
                    <input type="text" value={GfG}
                    onChange={(e)=>{
                        setGfG(e.target.value);
                    }} className=" block max-sm:w-[80%] w-fit rounded-md py-1.5
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                                    border-[1px] tracking-widest
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex relative w-[250px] flex-col gap-1 '>
                    <p className='block text-sm font-medium
                            leading-6 text-gray-900'> HackerRank username</p>
                    <input type="text" value={HackerRank}
                    onChange={(e)=>{
                        setHackerRank(e.target.value);
                    }} className=" block max-sm:w-[80%] w-fit rounded-md py-1.5
                                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-black/10
                                    border-[1px] tracking-widest
                                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    px-3  focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className=' w-full flex items-center justify-center'>
                <button onClick={()=>{
                    save();
                }} className="transition-all active:scale-105 border-black/30 
                border-[1px] select-none px-5 py-2 rounded-xl text-lg hover:cursor-pointer
                active:shadow-lg bg-teal-700 text-white">Save</button>
            </div>
        </div>
      </div>
      <div className=' h-10 mt-10 '>
        <p className=' text-orange-700'>{flasher}</p>
      </div>
    </div>
  )
}

export default AddStudents