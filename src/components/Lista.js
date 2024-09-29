import React from 'react'
import{BiEdit} from "react-icons/bi"
import{AiFillDelete} from "react-icons/ai"

const Lista = ({text, updateMode, deleteLista}) => {
  return (
    <div className="lista">
        <div className="texto">{text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}></BiEdit>
            <AiFillDelete className="icon" onClick={deleteLista}> </AiFillDelete>
        </div>
    </div>
  )
}

export default Lista
