import React from 'react'

interface  currentProps{
    data : string;
}
const TD:React.FC<currentProps> = (props) => {
  return (
    <td>{props.data}</td>
  )
}

export default TD