//El siguiente código implementa un componente de React llamado Lista, que muestra un elemento de la lista de tareas con las opciones de editar y eliminar.

import React from 'react'

//Se importan Iconos de editar y eliminar
import{BiEdit} from "react-icons/bi"
import{AiFillDelete} from "react-icons/ai"

//Este componente recibe tres props:
//El texto o contenido de la tarea que se muestra.
//Una función que se ejecuta cuando se desea editar una tarea.
//Una función que se ejecuta cuando se desea eliminar una tarea.
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
