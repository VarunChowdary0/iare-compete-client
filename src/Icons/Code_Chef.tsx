import React from 'react'

interface currentProps{
  color : string,
  scale : number
}
const Code_Chef:React.FC<currentProps> = (props) => {
  return (
    <div className=' scale-100'>
       <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="" />
    </div>
  )
}

export default Code_Chef