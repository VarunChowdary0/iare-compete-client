import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "./Constants";
import Leet_Code from "../Icons/Leet_Code";
import Code_Chef from "../Icons/Code_Chef";
import Hacker_Rank from "../Icons/Hacker_Rank";
import StarIcon from "../Icons/Type3_icons/StarIcon";
import GeekforGeeks from "../Icons/GeekforGeeks";

const DashBoard: React.FC = () => {
  const { roll } = useParams();
  const [data,setData] = useState<{
    rank : number,
    RollUMN: string;
    Name: string;
    Department: string;
    lc_username: string|'';
    lc_easy: number;
    lc_medium: number;
    lc_hard: number;
    cc_contests: number | 0;
    cc_problemsolved: number | 0;
    cc_username: string | '';
    hrc_username: string | '';
    hrc_oneStarBadge: number;
    hrc_twoStarBadge: number;
    hrc_threeStarBadge: number;
    hrc_fourStarBadge: number;
    hrc_fiveStarBadge: number;
    hrc_AdvancedCertifications: number;
    hrc_IntermediateCertifications: number;
    hrc_BasicCertifications: number;
    gfg_username: string|'';
    gfg_rank: number;
    gfg_problemSolved: number;
    gfg_contestRating: number;
    gfg_score: number;
    LC_S:number|0;
    CC_S:number;
    GFG_S:number;
    HRC_S:number;
    OverallScore:number;
  }>();

  const skills = ['JavaScript','React','Node.js','HTML/CSS','TailwindCss','JavaScript','React','Node.js','HTML/CSS','JavaScript','React','Node.js','HTML/CSS','JavaScript','React','Node.js','HTML/CSS','JavaScript','React','Node.js','HTML/CSS','JavaScript','React','Node.js','HTML/CSS','JavaScript','React','Node.js','HTML/CSS',]

  useEffect(() => {
    document.title = roll || "Profile";
  }, []);
  useEffect(()=>{
    axios.post(url+'/get-user-data',{roll})
    .then((Res)=>{
      console.log(Res.data[0]);
      setData(Res.data[0])
    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[])
  return (
    // <div className=" h-screen w-screen flex items-center flex-col pt-[20vh] bg-[#eae8ed]">
    //   {/* {roll}
    //    */}
    //    { data &&  <div
    //       className=" w-[80%] h-[300px] 
    //      max-md:flex-col max-md:h-fit
    //      border-[1px] flex bg-white dark:bg-dark_dark_200/90
    //       rounded-r-[20px] max-sm:gap-14 right_bottom_shadow
    //        rounded-[50vh] items-center gap-10
    //     shadow-xl dark:border-none transition-all">
    //       <div
    //         className=" h-[320px] w-[320px] 
    //          bg-[#eae8ed]
    //         rounded-full flex items-center justify-center">
    //         <div
    //           className=" max-md:w-[300px] max-md:h-[300px] 
    //             h-[100%] w-[100%] bg-[#3c3c3c]
    //             overflow-hidden rounded-full  ">
    //           <img
    //             className=" select-none hover:scale-110 transition-all rounded-full "
    //             alt="RETRY"
    //             src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll?.toUpperCase()}/${roll?.toUpperCase()}.jpg`} />
    //         </div>
    //       </div>
    //       <div
    //         className=" relative flex items-start flex-1 
    //          justify-start pl-10 max-md:flex-col gap-10">
    //         <div
    //           className="
    //              max-sm:pl-5 max-sm:items-end max-sm:px-3
    //             bg-black/0 flex flex-col gap-3">
    //           <div className=" items-center gap-5 flex flex-row">
    //             <p
    //               className=" text-2xl
    //                   max-sm:text-xl
    //                   font-thin">
    //               {data.Name} 
    //             </p>
    //             <span className=" pt-2">
    //               <PenIcon color="red" size={12}/>
    //             </span>
    //           </div>
    //           <p className=" opacity-50 text-md">{roll}</p>
    //         </div>
    //         <div
    //           className=" parent ml-[25vw] right-0 h-[100px] w-fit px-7 rounded-md
    //             flex items-center justify-end
    //             max-sm:scale-75 relative hover:cursor-help
    //             bg-orange-500 text-white gap-4">
    //           <p className=" text-5xl">{data.OverallScore}</p>
    //           <span
    //             className=" font-thin text-center 
    //                 text-xl pt-3">
    //             Score
    //           </span>
    //           <div
    //             className=" absolute child
    //                  bottom-[-40px] right-[-20px]
    //                 px-2 py-1 bg-black/25 
    //                 rounded-sm"
    //           >
    //             Credit score
    //           </div>
    //         </div>
    //       </div>
    //     </div>}
    // </div>
    <div className=" pt-16 bg-gray-100 mt-[60px] pb-8">
      <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                  <div className="bg-white shadow rounded-lg p-6">
                      <div className="flex flex-col items-center">
                          <img 
                              src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll?.toUpperCase()}/${roll?.toUpperCase()}.jpg`} 
                              className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                          </img>
                          <h1 className="text-xl font-bold">{data?.Name}</h1>
                        <div className=" flex items-center justify-center gap-6">
                          <p className="text-gray-700">{data?.RollUMN}</p>
                          <p className="text-gray-700">{data?.Department}</p>
                        </div>
                          <div className="mt-6 flex flex-wrap gap-4 justify-center">
                              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                              <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                          </div>
                      </div>
                      <hr className="my-6 border-t border-gray-300"/>
                      <div className="flex flex-col">
                      <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                          <ul className=" flex gap-4 mt-5 flex-wrap max-h-[260px] overflow-y-auto">
                            {
                              skills.map((ele,id)=>
                                <li key={"skill-"+id} className="mb-2 bg-black/10 px-2 py-1 rounded-lg hover:bg-black/20 
                                transition-all hover:cursor-pointer">{ele}</li>
                              )
                            }
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-span-4 sm:col-span-9">
                  <div className="bg-white shadow rounded-lg p-6">
                      <h2 className="text-xl font-bold mb-4">About Me</h2>
                      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                          vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                          suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                          luctus risus rhoncus id.
                      </p>

                      <div className=" flex items-start justify-start gap-10">
                        <h2 className="font-bold text-center mt-8 text-xl  my-6 mb-2">
                            Find me on
                        </h2>
                        <div className="flex justify-center items-center gap-6 mt-9">
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
              <p className="mt-3   text-xl text-gray-500 sm:mt-4">
                  <a className="hover:underline" href={"https://leetcode.com/u/"+data?.lc_username}>
                    {data?.lc_username}
                  </a>
              </p>
          </div>
      </div>

      <div className="mt-10 pb-1 max-sm:sca">
          <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                      <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  Easy Problems Solved
                              </div>
                              <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.lc_easy}</dd>
                          </div>
                          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  Medium Problems Solved
                              </div>
                              <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.lc_medium}</dd>
                          </div>
                          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  Hard Problems Solved
                              </div>
                              <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.lc_hard}</dd>
                          </div>
                        
                      </dl>
                  </div>
              </div>
          </div>
      </div>
      </div>
      <hr />
      <div className=" z-0 bg-gray-50 pt-16 pb-5 max-sm:py-10">
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
              <p className="mt-3  text-xl text-gray-500 sm:mt-4">
                  <a className="hover:underline" href={"https://www.codechef.com/users/"+data?.cc_username}>
                    {data?.cc_username}
                  </a>
              </p>
          </div>
      </div>
      <div className="mt-10 pb-1 max-sm:sca">
          <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                      <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  All Problems Solved
                              </div>
                              <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.cc_problemsolved}</dd>
                          </div>
                          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  Contest Participated
                              </div>
                              <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.cc_contests}</dd>
                          </div>
                      </dl>
                  </div>
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
              <p className="mt-3   text-xl text-gray-500 sm:mt-4">
                  <a className="hover:underline" href={"https://hackerrank.com/profile/"+data?.hrc_username}>
                    {data?.hrc_username}
                  </a>
              </p>
          </div>
      </div>

      <div className="mt-10 pb-1 max-sm:sca">
          <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto">
                      <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  Badges
                              </div>
                              {/* <dd className="order-1 text-5xl font-extrabold text-gray-700">
                                {data?.lc_easy}
                                </dd> */}
                              <div className=" flex flex-col items-center justify-center">

                              <div className=" flex items-center gap-3">
                                  <div className=" flex items-center justify-center">
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                  </div>
                                  {data?.hrc_fiveStarBadge}
                                </div>

                                <div className=" flex items-center gap-3">
                                  <div className=" flex items-center justify-center">
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="#7f8a8e"/>
                                  </div>
                                  {data?.hrc_fourStarBadge}
                                </div>
                               
                                <div className=" flex items-center gap-3">
                                  <div className=" flex items-center justify-center">
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="#7f8a8e"/>
                                    <StarIcon color="#7f8a8e"/>
                                  </div>
                                  {data?.hrc_threeStarBadge}
                                </div>
                               
                                <div className=" flex items-center gap-3">
                                  <div className=" flex items-center justify-center">
                                    <StarIcon color="gold"/>
                                    <StarIcon color="gold"/>
                                    <StarIcon color="#7f8a8e"/>
                                    <StarIcon color="#7f8a8e"/>
                                    <StarIcon color="#7f8a8e"/>
                                  </div>
                                  {data?.hrc_twoStarBadge}
                                </div>
                             
                                <div className=" mb-3 flex items-center gap-3">
                                  <div className=" flex items-center justify-center">
                                    <StarIcon color="gold"/>
                                    <StarIcon color="#7f8a8e"/>
                                    <StarIcon color="#7f8a8e"/>
                                    <StarIcon color="#7f8a8e"/>
                                    <StarIcon color="#7f8a8e"/>
                                  </div>
                                  {data?.hrc_oneStarBadge}
                                </div>
                              </div>
                          </div>
                          <div className="flex flex-col border-b border-gray-100 p-6 max-sm:p-3 text-center sm:border-0 sm:border-r">
                              <div className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                  Certifications
                              </div>
                              {/* <dd className="order-1 text-5xl font-extrabold text-gray-700">{data?.lc_medium}</dd> */}
                                <div className=" flex justify-around mt-[6.1rem] max-sm:mt-3 w-full">
                                    <div className=" flex items-center justify-center gap-1">
                                    <p className=" text-lg tracking-widest font-semibold">Advanced -</p>
                                    <p>{data?.hrc_AdvancedCertifications}</p>
                                  </div>
                                  <div className=" h-10 max-sm:h-8 w-[1px] bg-[#bdbdbd]"></div>
                                  <div className=" flex items-center justify-center gap-1">
                                    <p className=" text-lg tracking-widest font-semibold">Intermidiate -</p>
                                    <p>{data?.hrc_IntermediateCertifications}</p>
                                  </div>
                                  <div className=" h-10 max-sm:h-8 w-[1px] bg-[#bdbdbd]"></div>
                                  <div className=" flex items-center justify-center gap-1">
                                    <p className=" text-lg tracking-widest font-semibold">Basic -</p>
                                    <p>{data?.hrc_BasicCertifications}</p>
                                  </div>
                                </div>
                          </div>
                      </dl>
                  </div>
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
              <p className="mt-3   text-xl text-gray-500 sm:mt-4">
                  <a className="hover:underline" target="_blank" href={"https://geeksforgeeks.org/user/"+data?.gfg_username}>
                    {data?.gfg_username}
                  </a>
              </p>
          </div>
      </div>

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
      </div>
      </div>
    </div>
  );
};

export default DashBoard;
