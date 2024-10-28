import React from 'react'
import { useParams } from 'react-router-dom'

const DashBoard:React.FC = () => {
    const {roll} = useParams();
  return (
    <div className=' h-screen w-screen'>
        {/* {roll}
        <img src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll?.toUpperCase()}/${roll?.toUpperCase()}.jpg`} alt="image" /> */}
        
    </div>
  )
}

export default DashBoard