import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "./Constants";
import Leet_Code from "../Icons/Leet_Code";
import Code_Chef from "../Icons/Code_Chef";
import Hacker_Rank from "../Icons/Hacker_Rank";
import GeekforGeeks from "../Icons/GeekforGeeks";
import PenIcon from "../Icons/PenIcon";
import CloseIcon from "../Icons/CloseIcon";
import App from "../App";

// Add update personal Info using useEffect for the dependent dependences,

const Settings: React.FC = () => {

const RollUMN = localStorage.getItem('rollafsamsdkjbnnsan_9U9jvobdS');

const [data, setData] = useState<{
        About: string | "";
        CodeChefUsername: string | "";
        Department: string | "";
        Facebook: string | '';
        GeekForGeeksUsername: string | '';
        Github: string | '';
        HackerRankUsername: string | '';
        Instagram: string | '';
        LeetCodeUsername: string | '';
        LinkedIn: string | '';
        MailAddress: string | '';
        Name: string;
        Resume: string | '';
        X: string | '';
        YouTube : string |'';
    }>({
        About: "",
        CodeChefUsername: "",
        Department: "",
        Facebook: '',
        GeekForGeeksUsername: '',
        Github: '',
        HackerRankUsername: '',
        Instagram: '',
        LeetCodeUsername: '',
        LinkedIn: '',
        MailAddress: '',
        Name: "",
        Resume: '',
        X: '',
        YouTube : ''
    }); 

    const [resume_link, setRes_link] = useState<string>(data.Resume);
    const [personalMail, setPersonalMail] = useState<string>(data.MailAddress);
    const [aboutMe, setAbout] = useState<string>(data.About);


    const [Skills_, setSkills] = useState<{ Skill: string }[]>([]);
    const [ld_skill, set_ld_skill] = useState<boolean>(false);
    const [Skil, setskil] = useState<string>('');

    useEffect(() => {
        axios.post(url + '/get_skills', {
            rollNumber: RollUMN
        })
        .then((res) => {
             // console.log(res.data.skills);
            setSkills(res.data.skills);
        })
        .catch((err) => {
            console.log(err.response.data.message);
        });
    }, [RollUMN]); // Dependency on RollUMN

const addSkill = () => {
    if (Skil.length !== 0) {
        set_ld_skill(true);
        axios.post(url + '/add_skill', {
            RollNumber: RollUMN,
            Skill: Skil
        })
        .then((res) => {
            setSkills([...Skills_, { Skill: Skil }]);
            setskil(''); 
            set_ld_skill(false);
        })
        .catch((err) => {
            set_ld_skill(false);
            console.log(err);
        });
    }
};

const removeSkill = (skillToRemove: string) => {
    axios.post(url + '/remove_skill', {
        RollNumber: RollUMN,
        Skill: skillToRemove
    })
    .then((res) => {
            setSkills(Skills_.filter(skill => skill.Skill !== skillToRemove));
            console.log("Removing: ", skillToRemove);
        })
        .catch((err) => {
            console.log(err);
        });
};


    useEffect(()=>{
    if(!localStorage.getItem('uhhnjX56g7009ijhvjjycb8yubuibsd')){
        window.location.href = '/';
    };
    })

    const [oldPwd,setOldPwd] = useState<string>('');
    const [newPwd,stNewPwd] = useState<string>('');
    const [ConPwd,setConPwd] = useState<string>('');

    const [show_changer,setChanger] = useState<boolean>(false);

    const [mag,setMsg] = useState<string>('');

    const updatePass = () => {
    console.log("sdvn")
    if(oldPwd.length >= 8){
        if(newPwd.length >= 8){
        if(newPwd === ConPwd){
            const payload = {
            RollNumber : RollUMN,
            old_ : oldPwd,
            new_ : newPwd
            }
            axios.post(url+'/update_password',payload)
            .then((res)=>{
            console.log(res.data.message);
            setMsg("Password has been updated");
            setTimeout(()=>{
                setMsg('');
            },1700);
            setChanger(false);
            })
            .catch((err)=>{
            console.log(err.response.data.message);
            setMsg(err.response.data.message);
            setTimeout(()=>{
                setMsg('');
            },1700);
            })
        }else{
            setMsg('New password and Confirm password do not match');
            setTimeout(()=>{
            setMsg('');
            },1700);
        }
        }else{
        setMsg('New password should have atleast 8 characters');
        setTimeout(()=>{
            setMsg('');
        },1700)
        }
    }
    else{
        setMsg('Old password and Confirm password do not match');
        setTimeout(()=>{
        setMsg('');
        },1700)
    }
    }

    const updatePersonalInfo = () => {
        if (aboutMe !== data.About || personalMail !== data.MailAddress ||
            resume_link !== data.Resume ){
            axios.post(url + '/update_personal_data', {
                RollNumber: RollUMN,
                About: aboutMe || null,
                CodeChefUsername: data.CodeChefUsername || null,
                Department: data.Department,
                Facebook: data.Facebook || null,
                GeekForGeeksUsername: data.GeekForGeeksUsername || null,
                Github: data.Github || null,
                HackerRankUsername: data.HackerRankUsername || null,
                Instagram: data.Instagram || null,
                LeetCodeUsername: data.LeetCodeUsername || null,
                LinkedIn: data.LinkedIn || null,
                MailAddress: personalMail || null,
                Name: data.Name,
                Resume: resume_link || null,
                X:data.X || null,
                Youtube : data.YouTube || null
            })
            .then((response) => {
                console.log(response);
                setShowSave(false);
                fetch_data();
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else{
            console.log(' usernad');
            axios.post(url+'/update_usernames',{
                RollNumber:RollUMN,
                lc_username,gfg_username,hrc_username,cc_username
            })
            .then((res)=>{
                console.log(res.data.message);
                setShowSave(false);
                fetch_data()
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    };

    // // Only call the update function if relevant data has changed
  
    const [lc_username,set_LC_username] = useState<string>(data.LeetCodeUsername);
    const [cc_username,set_CC_username] = useState<string>(data.CodeChefUsername);
    const [gfg_username,set_gfg_user] = useState<string>(data.GeekForGeeksUsername);
    const [hrc_username,set_hrc_user] = useState<string>(data.HackerRankUsername);

    const [show_save,setShowSave] = useState<boolean>(false);

    useEffect(() => {
    
        if (aboutMe !== data.About || personalMail !== data.MailAddress ||
           resume_link !== data.Resume || lc_username !== data.LeetCodeUsername ||
            hrc_username !== data.HackerRankUsername || cc_username !== data.CodeChefUsername ||
            gfg_username !== data.GeekForGeeksUsername ) {
            setShowSave(true);
        }
        else{
            setShowSave(false);
        }
    }, [aboutMe, personalMail, resume_link, data , lc_username , hrc_username , cc_username , gfg_username]);
    
    useEffect(()=>{
        document.title = 'Settings';
        },[]);

    const fetch_data = () =>{
        axios.post(url+'/get_data_for_settings',{
            RollNumber : RollUMN
            }).then((res)=>{
                setData(res.data[0])
                setShowSave(false);
            console.log(res.data[0]);
            })
            .catch((err)=>{
            console.log(err);
            })
    }
    
    useEffect(()=>{
       fetch_data();
    },[]);

    useEffect(() => {
        if (data) {
            setRes_link(data.Resume);
            setPersonalMail(data.MailAddress);
            setAbout(data.About);
            set_LC_username(data.LeetCodeUsername);
            set_CC_username(data.CodeChefUsername);
            set_hrc_user(data.HackerRankUsername);
            set_gfg_user(data.GeekForGeeksUsername);
            setShowSave(false);
        }
    }, [data]);
    

return (
    <>
    
    {show_changer && (
<>
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 z-[1000]"></div>
    <div className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm z-[1000]" onClick={() => setChanger(false)}></div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2
    -translate-y-1/2 w-[350px] h-[430px] z-[3000] bg-white shadow-xl rounded-lg p-4"
    role="dialog" aria-modal="true">
        <div className=" w-full flex items-center text-xl font-4  h-10">
            Change Password
        </div>
        <hr />
        <div className=" flex flex-col gap-3 py-4">
        <div className=" flex flex-col gap-1">
            <p>Old Password</p>
            <input type="password" value={oldPwd} onChange={(e)=>{
            setOldPwd(e.target.value);
            }} className=" bg-black/0 tracking-widest border rounded-sm px-2 py-2"/>
        </div>
        <div className=" flex flex-col gap-1">
            <p>New Password</p>
            <input type="password" value={newPwd} onChange={(e)=>{
                stNewPwd(e.target.value)
            }} className=" bg-black/0 tracking-widest border rounded-sm px-2 py-2"/>
        </div>
        <div className=" flex flex-col gap-1">
            <p>Confirm Password</p>
            <input type="password" value={ConPwd} onChange={(e)=>{
            setConPwd(e.target.value)
            }} className={` bg-black/0 tracking-widest border rounded-sm px-2 py-2 
            ${(ConPwd===newPwd?'text-green-700':'text-red-500')}`}/>
        </div>
        <div className=" text-orange-700 text-sm w-full h-5 text-center bg-black/0">
            <p>{mag}</p>
        </div>
        <div className=" flex items-center justify-center pt-2">
            <div onClick={()=>{
            updatePass();
            }} className=" text-white px-3 py-2 bg-sky-400  rounded-md w-fit active:scale-90 hover:cursor-pointer transition-all">
            Update
            </div>  
        </div>
        </div>
    </div>
</>
)}

    
    {
        Boolean(localStorage.getItem('uhhnjX56g7009ijhvjjycb8yubuibsd')) ?
        (data.Name.length > 0 ?
            <div className=" pt-16 bg-gray-100 mt-[60px] pb-8">
        { show_save && 
        <div className=" fixed bottom-20 left-0 right-0 flex items-center justify-center z-[3000] ">
            <div onClick={()=>{
                updatePersonalInfo();
            }} className=" px-3 py-2 text-white font-4
             hover:cursor-pointer active:scale-75 transition-all duration-500
              rounded-lg shadow-lg bg-teal-500 text-center select-none">
                Save Changes
            </div>
        </div>
        }
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 sm:col-span-3">
                    <div className="bg-white shadow rounded-lg p-6">
                        <div className="flex flex-col items-center">
                            <img 
                                src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${RollUMN?.toUpperCase()}/${RollUMN?.toUpperCase()}.jpg`} 
                                className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">
    
                            </img>
                            <h1 className="text-xl font-bold">{data?.Name}</h1>
                            <div className=" flex items-center justify-center gap-6">
                            <p className="text-gray-700">{RollUMN}</p>
                            <p className="text-gray-700">{data?.Department}</p>
                            </div>
                            <div className="mt-6 bg-black/10 flex w-full flex-col gap-3 p-2 rounded-md">
                            <div className=" flex gap-2">
                                    <div  className="bg-blue-500 w-fit hover:bg-blue-600 text-white py-1 px-2 rounded">Contact</div>
                                    <input type="mail" value={personalMail} 
                                    placeholder=" Enter personal mail Addres"
                                    onChange={(e)=>{
                                    setPersonalMail(e.target.value);
                                    }}
                                    className=" px-2 text-sm w-full bg-white rounded-xl text-gray-600" />
                                </div>
                                <div className=" flex gap-2">
                                    <div className="bg-gray-300 w-fit hover:bg-gray-400 text-gray-700 py-1 px-2 rounded">Resume</div>
                                    <input type="url" value={resume_link} 
                                    placeholder=" Enter G-drive Link"
                                    onChange={(e)=>{
                                    setRes_link(e.target.value);
                                    }}
                                    className=" px-2 text-sm w-full bg-white rounded-xl text-sky-400" />
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-t border-gray-300"/>
                        <div className="flex flex-col">
                        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                            <div className=" h-14 w-full flex items-center
                            text-gray-600 tracking-wider justify-center gap-2 rounded-lg bg-black/10">
                                    <input type="text" 
                                    value={Skil}
                                    onChange={(E)=>{
                                    setskil(E.target.value);
                                    }}
                                    onKeyDown={(e)=>{
                                        if(e.key==='Enter'){
                                            addSkill();
                                        }
                                    }}
                                    className=" bg-white px-2 py-1 w-[60%] rounded-md"
                                    placeholder="New Skill" />
                                    {
                                    ld_skill ?
                                    <div className=" loader"></div>
                                    :
                                    <div onClick={()=>{
                                    addSkill();
                                    }} className=" bg-indigo-500 px-3 py-1 select-none active:scale-90 transition-all
                                    text-white rounded-lg">Add</div>
                                    }
                            </div>
                            <ul className=" flex gap-4 mt-5 flex-wrap max-h-[260px] overflow-y-auto pt-2
                            ">
                                {
                                Skills_.map((ele,id)=>
                                    <li key={"skill-"+id} className="mb-2 bg-black/10 px-2 py-1 rounded-lg hover:bg-black/20 
                                    parent transition-all hover:cursor-pointer">{ele.Skill}
                                    <div onClick={()=>{
                                    removeSkill(ele.Skill);
                                    }} 
                                    className=" flex items-center justify-center
                                    w-3 h-3 bg-black/40 rounded-full child top-[-3px] right-0">
                                        <div className=" scale-50">
                                            <CloseIcon color="white" size={0.2}/>
                                        </div>
                                    </div>
                                    </li>
                                )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-9 relative">
                    <div onClick={()=>{
                    setChanger(true)
                    }} className=" absolute top-4 right-4 px-3 py-1 rounded-lg 
                    text-white hover:cursor-pointer active:scale-90 transition-all
                    bg-[#232323] select-none">Change Password</div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <div className=" flex items-center">
                            <h2 className="text-xl font-bold mb-4">About Me
                            </h2>
                            <div className=" mb-3 ml-5 ">
                            <PenIcon color="black" size={12}/>
                            </div>
                        </div>
                        <textarea value={aboutMe} onChange={(e)=>{setAbout(e.target.value)}} className="text-gray-700 h-fit min-h-[100px]
                        max-h-[300px] outline-none w-full">
                        </textarea>
    
                        <div className=" flex max-sm:flex-col max-sm:items-center max-sm:gap-3 items-start justify-start gap-10">
                            <h2 className="font-bold text-center mt-8 text-xl  my-6 mb-2">
                                Find me on
                            </h2>
                            <div className="flex justify-center items-center gap-6 mt-9 max-sm:mt-0">
                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds LinkedIn" href=""
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                        <path fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a>
                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href=""
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                                        <path fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                        </path>
                                    </svg>
                                </a>
                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href=""
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                        <path fill="currentColor"
                                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                        </path>
                                    </svg>
                                </a>
                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Instagram" href=""
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                        <path fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                        </path>
                                    </svg>
                                </a>
                                <a className="text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href=""
                                    target="_blank">
                                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
    
    
                        <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                        <div className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Web Developer</span>
                                <p>
                                    <span className="text-gray-700 mr-2">at ABC Company</span>
                                    <span className="text-gray-700">2017 - 2019</span>
                                </p>
                            </div>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                suscipit.
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Web Developer</span>
                                <p>
                                    <span className="text-gray-700 mr-2">at ABC Company</span>
                                    <span className="text-gray-700">2017 - 2019</span>
                                </p>
                            </div>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                suscipit.
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                <span className="text-gray-700 font-bold">Web Developer</span>
                                <p>
                                    <span className="text-gray-700 mr-2">at ABC Company</span>
                                    <span className="text-gray-700">2017 - 2019</span>
                                </p>
                            </div>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                suscipit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=" z-0 bg-gray-50 pt-16 pb-5 max-sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between max-sm:flex-col">
        <div className=" flex items-center max-sm:ml-1 gap-4">
                <div className=" hidden max-sm:block">
                    <Leet_Code color="orange" scale={6}/>
                </div>
                <div className=" max-sm:hidden">
                    <Leet_Code color="orange" scale={2}/>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    The LeetCode platform
                </h2>
                </div>
                <div className="mt-3  flex items-center justify-center gap-3 text-xl text-gray-500 sm:mt-4">
                    <div className=" mt-1">
                        <PenIcon size={13} color="#000"/>
                    </div>
                    <input type="text" className=" outline-none" value={lc_username} onChange={(e)=>{
                        set_LC_username(e.target.value);
                    }} />
                </div>
            </div>
        </div>

        </div>
        <hr />
        <div className=" z-0 bg-gray-50 pt-16 pb-5 max-sm:py-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between  max-sm:flex-col">
                    <div className=" flex items-center max-sm:ml-1 gap-4">
                    <div className=" hidden max-sm:block">
                        <Code_Chef color="orange" scale={6}/>
                    </div>
                    <div className=" max-sm:hidden">
                        <Code_Chef color="orange" scale={2}/>
                    </div>
                    </div>
                    <div className="mt-3  flex items-center justify-center gap-3 text-xl text-gray-500 sm:mt-4">
                    <div className=" mt-1">
                        <PenIcon size={13} color="#000"/>
                    </div>
                            <input type="text" className=" outline-none" value={cc_username} onChange={(e)=>{
                                set_CC_username(e.target.value);
                            }} />
                    </div>
                </div>
            </div> 
        </div>
        <hr />
        <div className=" z-0 bg-gray-50 pt-16 pb-5 max-sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between max-sm:flex-col">
        <div className=" flex items-center max-sm:ml-1 gap-4">
                <div className=" hidden max-sm:block">
                    <Hacker_Rank color="orange" scale={10}/>
                </div>
                <div className=" max-sm:hidden">
                    <Hacker_Rank color="orange" scale={2}/>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Hacker Rank
                </h2>
                </div>
                <div className="mt-3  flex items-center justify-center gap-3 text-xl text-gray-500 sm:mt-4">
                    <div className=" mt-1">
                        <PenIcon size={13} color="#000"/>
                    </div>
                        <input type="text" className=" outline-none" value={hrc_username} onChange={(e)=>{
                                set_hrc_user(e.target.value);
                            }} />
                </div>
            </div>
        </div>

        </div>
        <hr />
        <div className=" z-0 bg-gray-50 pt-16 pb-5 max-sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between max-sm:flex-col">
        <div className=" flex items-center max-sm:ml-1 gap-4">
                <div className=" hidden max-sm:block">
                    <GeekforGeeks color="orange" scale={6}/>
                </div>
                <div className=" max-sm:hidden">
                    <GeekforGeeks color="orange" scale={2}/>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    GeekforGeeks
                </h2>
                </div>
                <div className="mt-3  flex items-center justify-center gap-3 text-xl text-gray-500 sm:mt-4">
                    <div className=" mt-1">
                        <PenIcon size={13} color="#000"/>
                    </div>
                        <input type="text" className=" outline-none" value={gfg_username} onChange={(e)=>{
                                set_gfg_user(e.target.value);
                            }} />
                </div>
            </div>
        </div>
{/*   
        <div className="mt-10 pb-1 max-sm:sca">
            <div className="relative">
                <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Problems Solved
                                </div>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.gfg_problemSolved}</dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Score
                                </div>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.gfg_score}</dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Collage Rank
                                </div>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.gfg_rank}</dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Contest Rating
                                </div>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.gfg_contestRating}</dd>
                            </div>
                        
                        </dl>
                    </div>
                </div>
            </div>
        </div> */}
        </div>
            </div>
            :
            <div className=" flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 z-[3000]">
                <div className=" loader"></div>
            </div>
        )
        :
    <div className="h-screen w-screen text-5xl flex items-center justify-center">
        <div
        className="fixed top-[60px] bottom-0 left-0 right-0 flex-col
    max-sm:text-sm text-center max-sm:m:px-5 gap-10
        dark:text-[#7174c0] dark:bg-dark_dark_100
        max-sm:flex-col-reverse 
    flex items-center justify-center text-2xl bg-white"
    >
        <p className="max-sm:px-5">
        400 : No access to this page.
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
        <span className="text-orange-600">Settings</span>
        </div>
        </div>
    </div>
    }
    </>
);
};

export default Settings;
