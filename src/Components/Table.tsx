import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from './Constants'
import ArrowIcon from '../Icons/ArrowIcon'; 
import Hacker_Rank from '../Icons/Hacker_Rank';
import GeekforGeeks from '../Icons/GeekforGeeks';
import Code_Chef from '../Icons/Code_Chef';
import CloseIcon from '../Icons/CloseIcon';
import Leet_Code from '../Icons/Leet_Code';

const Table:React.FC = () => {
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
      }[]>();
    useEffect(()=>{
        axios.get(url+"/get-all-data")
            .then((res)=>{
                // console.log(res.data);
                setData(res.data);
                sortByOverallScore();
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])


    // useEffect(()=>{
    //     if(data){
    //         const sorted = [...data].sort((a, b) => {
    //             const lcA = a.lc_easy + (a.lc_medium * 3) + (a.lc_hard * 5);
    //             const ccA = (a.cc_contests * 5) + a.cc_problemsolved;
    //             const gfgA = a.gfg_score + (a.gfg_contestRating * 2);
    //             const hrcA = (a.hrc_oneStarBadge * 1) + (a.hrc_twoStarBadge * 2) + (a.hrc_threeStarBadge * 3) +
    //                          (a.hrc_fourStarBadge * 4) + (a.hrc_fiveStarBadge * 5) +
    //                          (a.hrc_AdvancedCertifications * 7) + (a.hrc_IntermediateCertifications * 5) + (a.hrc_BasicCertifications * 3);
    //             const totalA = lcA + ccA + gfgA + hrcA;
    
    //             const lcB = b.lc_easy + (b.lc_medium * 3) + (b.lc_hard * 5);
    //             const ccB = (b.cc_contests * 5) + b.cc_problemsolved;
    //             const gfgB = b.gfg_score + (b.gfg_contestRating * 2);
    //             const hrcB = (b.hrc_oneStarBadge * 1) + (b.hrc_twoStarBadge * 2) + (b.hrc_threeStarBadge * 3) +
    //                          (b.hrc_fourStarBadge * 4) + (b.hrc_fiveStarBadge * 5) +
    //                          (b.hrc_AdvancedCertifications * 7) + (b.hrc_IntermediateCertifications * 5) + (b.hrc_BasicCertifications * 3);
    //             const totalB = lcB + ccB + gfgB + hrcB;
    //             return totalB - totalA;
    //         });
    //         setData(sorted);
    //     }
    // },[data])

const sortByName = () => {
    if(searched){
        setSortSno(3);
        console.log("sort Name")
        setsearched([...searched].sort((a, b) => a.Name.localeCompare(b.Name)));
    }
};

const sortByBranch = () => {
    if(searched){
        setSortSno(4);
        setsearched([...searched].sort((a, b) => a.Department.localeCompare(b.Department)));
    }
};

const sortByRollNumber = () => {
    if(searched){
        setSortSno(2);
        setsearched([...searched].sort((a, b) => a.RollUMN .localeCompare(b.RollUMN)));
    }
};

const sortByLeetCodeScore = () => {
    if(searched){
        setSortSno(5);
        setsearched([...searched].sort((a, b) => {
            const lcA = (a.lc_easy * 1) + (a.lc_medium * 3) + (a.lc_hard * 5);
            const lcB = (b.lc_easy * 1) + (b.lc_medium * 3) + (b.lc_hard * 5);
            return lcB - lcA;
        }));
    }
};

const sortByCodeChefScore = () => {
    if(searched){
        setSortSno(6);
        setsearched([...searched].sort((a, b) => {
        const ccA = (a.cc_contests * 5) + a.cc_problemsolved;
            const ccB = (b.cc_contests * 5) + b.cc_problemsolved;
            return ccB - ccA; // Descending order
        }));
    }
};

const sortByGeeksForGeeksScore = () => {
    if(searched){
        setSortSno(7);
        setsearched([...searched].sort((a, b) => {
           const gfgA = a.gfg_problemSolved  ;
           const gfgB = b.gfg_problemSolved ;
           return gfgB - gfgA; // Descending order
       }));
    }
};

const sortByHackerRankScore = () => {
    if(searched){
        setSortSno(8);
        setsearched([...searched].sort((a, b) => {
            return b.HRC_S - a.HRC_S;
        }));
    }
};

const sortByOverallScore = () => {
    if(searched){
        setSortSno(1);
        setsearched([...searched].sort((a, b) => {
            return b.OverallScore - a.OverallScore;
        }));
    }
};

    // const updateUser = (RollNumber:string) =>{
    //     axios.post(url+'/update_user',{RollNumber})
    //     .then((res)=>{
    //         console.log(res.data);
    //     })
    //     .catch((er)=>{
    //         console.log(er);
    //     })
    // }

    const [sortSno,setSortSno] = useState<number>(1);

    const [show,setShow] = useState<boolean>(false);

    const [search,setSearch] = useState<string>('');

    const [searched,setsearched] = useState<{
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
        gfg_username: string| '';
        gfg_rank: number;
        gfg_problemSolved: number;
        gfg_contestRating: number;
        gfg_score: number;
        LC_S:number|0;
        CC_S:number;
        GFG_S:number;
        HRC_S:number;
        OverallScore:number;
      }[]>();
    const [filtered,setfiltered] = useState<{
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
        gfg_username: string| '';
        gfg_rank: number;
        gfg_problemSolved: number;
        gfg_contestRating: number;
        gfg_score: number;
        LC_S:number|0;
        CC_S:number;
        GFG_S:number;
        HRC_S:number;
        OverallScore:number;
      }[]>();
      const [Department,setDepartment] = useState<string>("");
    const [allDepts,setDepts] = useState<{
        departmentCode: string,
        departmentName: string
    }[]>();

    useEffect(()=>{
        axios.get(url+"/get-departments")
            .then((res)=>{
                setDepts(res.data);
            })
            .catch((er)=>{
                console.log(er);
            })
    },[])
    
    useEffect(()=>{
        // setsearched(data);
        setfiltered(data);
    },[data])

    useEffect(() => {
        if (data) {
            const filtered_data = Department
                ? data.filter(item => 
                    item.Department.toLowerCase() === Department.toLowerCase()
                )
                : data; // If Department is an empty string, use all data
    
            setfiltered(filtered_data);
        }
    }, [Department]);
    

    useEffect(()=>{
        if (filtered){
            const searchededData = filtered.filter(item =>
                item.Name.toLowerCase().includes(search.toLowerCase()) || 
                item.RollUMN.toLowerCase().includes(search.toLowerCase()) ||
                (item.lc_username &&item.lc_username.toLowerCase().includes(search.toLowerCase())) ||
                (item.cc_username &&item.cc_username.toLowerCase().includes(search.toLowerCase())) ||
                (item.hrc_username &&item.hrc_username.toLowerCase().includes(search.toLowerCase())) ||
                (item.gfg_username &&item.gfg_username.toLowerCase().includes(search.toLowerCase()))
            );
            setsearched(searchededData);
        }
    },[search,filtered])

  return (
    <div className=" mt-[60px] h-fit w-[99vw] flex  relative">
      <div
        className={` ${
          show
            ? " h-[70px] left-[300px] px-5 right-[300px] max-sm:h-fit max-sm:py-3 "
            : " w-[40px] h-[40px] bg-black/20  flex items-center justify-center left-[50vw] right-[50vw]"
        } 
          rounded-3xl backdrop-blur-sm transition-all duration-500
          fixed max-sm:top-[20px] bottom-10 mt-[60px]  max-sm:left-0 max-sm:right-0
         max-sm:scale-75  
       z-[4000]  border shadow-xl flex items-center `}
      >
        {show ? (
          <div className=' flex items-center max-sm:flex-col max-sm:items-start gap-5'>
            <div
              onClick={() => setShow(false)}
              className=" absolute top-[-5px] right-[-5px] bg-black/50 
             backdrop-blur-sm w-7 h-7 rounded-full flex items-center justify-center"
            >
              <CloseIcon size={1} color="white" />
            </div>
            <div className="relative">
              <div
                className="absolute inset-y-0 start-0 flex items-center
                ps-3 pointer-events-none"
              >
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="block w-full min-w-[300px] p-4 ps-10 text-sm text-gray-900 border 
                border-gray-300 rounded-full px-7 bg-gray-50
                    focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                required
              />

            </div>
            <div className=' flex flex-col'>
                <p className=' text-sm'>Department</p>
                <select
                    value={Department}
                    onChange={(e) => {
                    setDepartment(e.target.value);
                    }}
                    className=" w-[70px] text-sm py-1 px-2 rounded-lg border
                    text-black font-extralight focus:font-normal max-sm:scale-75 "
                >
                    <option id={"all"} value={""}>
                        All
                    </option>
                    {allDepts?.map((ele, idx) => (
                    <option id={ele.departmentCode} value={ele.departmentCode}>
                        {ele.departmentCode}
                    </option>
                    ))}
                </select>
              </div>
          </div>
        ) : (
          <div
            onClick={() => {
              setShow(true);
            }}
            className=" h-[40px]
         w-[40px] pt-3 pl-3 "
          >
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        )}
      </div>
      <table className="pb-14 absolute top-0 left-0 snap-x snap-mandatory">
        <thead>
          <tr>
            <th
              className=" snap-center border max-sm:w-[10vw] max-sm:z-[100] max-sm:text-sm px-6
                         text-xl stciker z-50 relative
                        left-0 truncate py-14 max-sm:py-0  min-w-[10vw] top-0 font-semibold bg-white"
            >
              <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
              <div
                onClick={() => {
                  sortByOverallScore();
                }}
                className=" parent hover:cursor-pointer bg-black/0 py-5 h-full w-full text-black bg-[#ffffff]"
              >
                Rank
                <div
                  className={` ${
                    sortSno === 1 ? " absolute" : "child"
                  } max-sm:bottom-0  max-sm:right-3 right-1 bottom-6`}
                >
                  <ArrowIcon color={sortSno === 1 ? "#000" : "#aaaaaa"} />
                </div>
              </div>
            </th>
            <th
              className=" snap-center parent hover:cursor-pointer border max-sm:text-sm text-xl  z-10 truncate py-14 max-sm:py-0 font-semibold min-w-[17vw]
                        bg-white px-5"
            >
              <div
                onClick={() => {
                  sortByRollNumber();
                }}
                className=" parent hover:cursor-pointer bg-black/0 py-5 h-full w-full text-black"
              >
                Roll Number
                <div
                  className={` ${
                    sortSno === 2 ? " absolute" : "child"
                  } max-sm:bottom-0  max-sm:right-8 right-4 bottom-6`}
                >
                  <ArrowIcon color={sortSno === 2 ? "#000" : "#aaaaaa"} />
                </div>
              </div>
              <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
            </th>
            <th
              className=" max-w:[200px] snap-center border max-sm:text-sm max-sm:z-[70] text-xl truncate py-14 max-sm:py-0 font-semibold top-0 stciker left-[10vw]
                         max-sm:left-[19vw] min-w-[22vw] bg-white px-5"
            >
              <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
              <div
                onClick={() => {
                  sortByName();
                }}
                className=" parent hover:cursor-pointer bg-black/0 py-5 h-full w-full text-black"
              >
                Name
                <div
                  className={` ${
                    sortSno === 3 ? " absolute" : "child"
                  } max-sm:bottom-0  max-sm:right-17 right-20 bottom-6`}
                >
                  <ArrowIcon color={sortSno === 3 ? "#000" : "#aaaaaa"} />
                </div>
              </div>
            </th>
            <th className=" snap-center border max-sm:z-[60] max-sm:text-sm text-xl truncate py-14 max-sm:py-0 font-semibold min-w-[17vw] top-0 stciker left-[32vw] bg-white">
              <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
              <div
                onClick={() => {
                  sortByBranch();
                }}
                className=" parent hover:cursor-pointer bg-black/0 py-5 h-full w-full text-black"
              >
                Branch
                <div
                  className={` ${
                    sortSno === 4 ? " absolute" : "child"
                  } max-sm:bottom-0  max-sm:right-7 right-16 bottom-6`}
                >
                  <ArrowIcon color={sortSno === 4 ? "#000" : "#aaaaaa"} />
                </div>
              </div>
            </th>
            <th className=" snap-center th22 z-10 border max-sm:text-sm truncate font-semibold min-w-[20vw] px-0 ">
              <div className="w-full h-full flex flex-col">
                <div className="w-full pb-6 text-xl max-sm:p-0 bg-black/0">
                  <div
                    onClick={() => {
                      sortByLeetCodeScore();
                    }}
                    className=" parent hover:cursor-pointer bg-black/0 py-5 h-full  max-sm:text-sm w-full text-black"
                  >
                    <div className=" absolute top-4 left-[10%] max-md:top-12 max-md:left-[40%] max-md:scale-75 max-sm:hidden ">
                      <Leet_Code color="orange" scale={1} />
                    </div>
                    LeetCode (LC)
                    <div
                      className={` ${
                        sortSno === 5 ? " absolute" : "child"
                      } max-sm:bottom-0  max-sm:right-8 right-16 bottom-6`}
                    >
                      <ArrowIcon color={sortSno === 5 ? "#000" : "#aaaaaa"} />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="w-full h-full pt-3 flex text-wrap items-center justify-center flex-col">
                  <div>Total</div>
                  <div className="h-fit text-sm font-normal max-sm:text-[8px]  w-[full] truncate">
                    (Easy*1 + Medium*3 + Hard*5)
                  </div>
                </div>
              </div>
            </th>
            <th className=" snap-center  relative border z-10 max-sm:text-sm truncate font-semibold min-w-[20vw] px-0 ">
              <div className="w-full h-full flex flex-col">
                <div className="w-full pb-[-3px] max-sm:h-[62px] h-[92px] text-xl max-sm:p-0 bg-black/0">
                  <div
                    onClick={() => {
                      sortByCodeChefScore();
                    }}
                    className=" parent hover:cursor-pointer bg-black/0 h-full max-sm:text-sm w-full pb-[50px] bg-black  text-black"
                  >
                    <div className=" scale-75 max-sm:pt-3 h-24 ">
                      <Code_Chef color="green" scale={0.5} />
                    </div>
                    {/* CodeChef (CC) */}
                    <div
                      className={` ${
                        sortSno === 6 ? " absolute" : "child"
                      } max-sm:bottom-0  max-sm:right-8 right-20 bottom-4`}
                    >
                      <ArrowIcon color={sortSno === 6 ? "#000" : "#aaaaaa"} />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="w-full h-full pt-3 flex text-wrap items-center justify-center flex-col">
                  <div>Total</div>
                  <div className="h-fit text-sm font-normal max-sm:text-[8px]  w-[full] truncate">
                    (Contest*5 + Problem Solved)
                  </div>
                </div>
              </div>
            </th>
            <th className=" snap-center  border z-10 max-sm:text-sm truncate font-semibold min-w-[20vw] px-0 ">
              <div className="w-full h-full flex flex-col">
                <div className="w-full pb-6 text-xl max-sm:p-0 bg-black/0">
                  <div
                    onClick={() => {
                      sortByGeeksForGeeksScore();
                    }}
                    className=" parent hover:cursor-pointer bg-black/0 py-5 h-full max-sm:text-sm w-full text-black"
                  >
                    <div className=" absolute top-3 left-[5px] max-md:top-12 max-md:left-[40%] max-md:scale-75 max-sm:hidden ">
                      <GeekforGeeks color="orange" scale={1} />
                    </div>
                    GeekforGeeks (GFG)
                    <div
                      className={` ${
                        sortSno === 7 ? " absolute" : "child"
                      } max-sm:bottom-0  max-sm:right-10 right-12 bottom-6`}
                    >
                      <ArrowIcon color={sortSno === 7 ? "#000" : "#aaaaaa"} />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="w-full h-full pt-3 flex text-wrap items-center justify-center flex-col">
                  <div>Total</div>
                  <div className="h-fit text-sm font-normal max-sm:text-[8px]  w-[full] truncate">
                    (Problem Solved + Contest*2)
                  </div>
                </div>
              </div>
            </th>
            <th className=" snap-center  border z-10 max-sm:text-sm truncate font-semibold min-w-[20vw] px-0 ">
              <div className="w-full h-full flex flex-col">
                <div className="w-full pb-6 text-xl max-sm:p-0 bg-black/0">
                  <div
                    onClick={() => {
                      sortByHackerRankScore();
                    }}
                    className=" parent hover:cursor-pointer bg-black/0 py-5 max-sm:text-sm h-full w-full text-black"
                  >
                    <div className=" absolute top-4 left-[10%] max-md:top-12 max-md:left-[40%] max-md:scale-75 max-sm:hidden ">
                      <Hacker_Rank color="green" scale={1} />
                    </div>
                    HackerRank (HR)
                    <div
                      className={` ${
                        sortSno === 8 ? " absolute" : "child"
                      } max-sm:bottom-0  max-sm:right-10 right-16 bottom-6`}
                    >
                      <ArrowIcon color={sortSno === 8 ? "#000" : "#aaaaaa"} />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="w-full h-full pt-3 flex text-wrap items-center justify-center flex-col">
                  <div>Total</div>
                  <div className="h-fit text-sm font-normal max-sm:text-[8px] w-[full] truncate">
                    (Based on Badges and Certificates)
                  </div>
                </div>
              </div>
            </th>
            <th className=" snap-center  border max-sm:text-sm text-xl truncate py-14 max-sm:py-0 font-semibold min-w-[20vw] bg-white px-5 ">
              <div
                onClick={() => {
                  sortByOverallScore();
                }}
                className=" parent hover:cursor-pointer bg-black/0 py-5 h-full w-full text-black"
              >
                Overall Score
                <div
                  className={` ${
                    sortSno === 1 ? " absolute" : "child"
                  } max-sm:bottom-0  max-sm:right-9 right-12 bottom-6`}
                >
                  <ArrowIcon color="#000" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {searched ? (
            searched?.map((ele, idx) => {
              return (
                <>
                  <tr key={idx} className="even:bg-white odd:bg-[#f3f3f3]">
                    <td className=" sna bg-inherit  z-30 stciker sticky left-0 max-sm:text-sm px-4  truncate text-center py-2">
                      <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                      <p
                        className={
                          sortSno === 1
                            ? " text-orange-700 font-semibold scale-105"
                            : "text-black"
                        }
                      >
                        {ele.rank}
                        <span className=' text-[#a2a2a2] font-thin text-xs pl-2'>({idx+1})</span>
                      </p>
                    </td>
                    <td className=" sna bg-inherit z-0 relative max-sm:text-sm px-4 truncate py-2">
                      <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>

                      <a target="_self" href={`/user/${ele.RollUMN}`}>
                        <p
                          className={
                            sortSno === 2
                              ? " text-orange-700 font-semibold scale-105"
                              : "text-black"
                          }
                        >
                          {ele.RollUMN}
                        </p>
                      </a>
                    </td>
                    <td className=" sna bg-inherit z-50 relative max-sm:text-sm stciker left-[10vw] max-sm:left-[19vw] px-4 truncate py-2">
                      <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                      <div className=" absolute right-0 top-0 bottom-0 w-[1px] bg-[#e5e7eb]"></div>
                      <p
                        className={
                          sortSno === 3
                            ? " text-orange-700 max-sm:max-w-[200px] font-semibold scale-105"
                            : "text-black max-sm:max-w-[200px] "
                        }
                      >
                        {ele.Name}
                      </p>
                    </td>
                    <td className=" sna bg-inherit z-50 relative stciker max-sm:z-0 left-[32vw] max-sm:text-sm px-4 truncate py-2">
                      <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                      <p
                        className={
                          sortSno === 4
                            ? " text-orange-700 font-semibold scale-105"
                            : "text-black"
                        }
                      >
                        {ele.Department}
                      </p>
                    </td>
                    <td className=" sna relative h-fit w-fit bg-inherit z-0 max-sm:text-sm text-center truncate py-2 snap-center">
                      <abbr
                        className="custom-tooltip"
                        data-title={
                          ele.lc_username
                            ? "@" + ele.lc_username?.toString()
                            : "No account"
                        }
                      >
                        <a
                          className="w-full h-full hover:underline hover:text-sky-500 relative"
                          target="_blank"
                          href={`https://leetcode.com/u/` + ele.lc_username}
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                          <p
                            className={
                              sortSno === 5
                                ? " text-orange-700 font-semibold scale-105"
                                : "text-black"
                            }
                          >
                            {ele.LC_S}
                          </p>
                        </a>
                      </abbr>
                      <div className=" absolute right-0 top-0 bottom-0 w-[1px] bg-[#e5e7eb]"></div>
                    </td>

                    <td className=" sna bg-inherit z-0 relative max-sm:text-sm text-center truncate py-2">
                      <abbr
                        className="custom-tooltip"
                        data-title={
                          ele.cc_username
                            ? "@" + ele.cc_username?.toString()
                            : "No account"
                        }
                      >
                        <a
                          className=" w-full h-full hover:underline hover:text-sky-500"
                          target="_blank"
                          href={`https://codechef.com/users/` + ele.cc_username}
                        >
                          <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                          <p
                            className={
                              sortSno === 6
                                ? " text-orange-700 font-semibold scale-105"
                                : "text-black"
                            }
                          >
                            {ele.CC_S}
                          </p>
                        </a>
                      </abbr>
                      <div className=" absolute right-0 top-0 bottom-0 w-[1px] bg-[#e5e7eb]"></div>
                    </td>
                    <td className=" sna bg-inherit z-0 relative max-sm:text-sm text-center truncate py-2">
                      <abbr
                        className="custom-tooltip"
                        data-title={
                          ele.gfg_username
                            ? "@" + ele.gfg_username?.toString()
                            : "No account"
                        }
                      >
                        <a
                          className=" w-full h-full hover:underline hover:text-sky-500"
                          target="_blank"
                          href={
                            `https://www.geeksforgeeks.org/user/` +
                            ele.gfg_username
                          }
                        >
                          <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                          <p
                            className={
                              sortSno === 7
                                ? " text-orange-700 font-semibold scale-105"
                                : "text-black"
                            }
                          >
                            {ele.GFG_S}
                          </p>
                        </a>
                      </abbr>
                    </td>
                    <td className=" sna bg-inherit z-0 relative max-sm:text-sm text-center truncate py-2">
                      <abbr
                        className="custom-tooltip"
                        data-title={
                          ele.hrc_username
                            ? "@" + ele.hrc_username?.toString()
                            : "No account"
                        }
                      >
                        <a
                          className=" w-full h-full hover:underline hover:text-sky-500"
                          target="_blank"
                          href={
                            `https://hackerrank.com/profile/` + ele.hrc_username
                          }
                        >
                          <div className=" absolute right-0 top-0 bottom-0 w-[0.5px] bg-[#e5e7eb]"></div>
                          <p
                            className={
                              sortSno === 8
                                ? " text-orange-700 font-semibold scale-105"
                                : "text-black"
                            }
                          >
                            {ele.HRC_S}
                          </p>
                        </a>
                      </abbr>
                    </td>
                    <td className=" sna bg-inherit z-0 relative max-sm:text-sm text-center truncate py-2">
                      <p
                        className={
                          sortSno === 1
                            ? " text-orange-700 font-semibold scale-105"
                            : "text-black"
                        }
                      >
                        {ele.OverallScore}
                      </p>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <div
              className=" fixed top-[60px] bottom-0 left-0 right-0
                    z-[2000] flex items-center justify-center"
            >
              <div className="loader"></div>
            </div>
          )}
          <div className=" h-16 w-full bg-black/0"></div>
        </tbody>
      </table>
      {/* <div onClick={()=>{
                updateUser('22951A05G7');
            }} className=' z-50 fixed top-7 right-9 rounded-lg text-white bg-black px-7 py-5'>
                    Update Test
            </div> */}
    </div>
  );
}

export default Table