//El siguiente código es un componente React llamado App, que sirve como la interfaz principal para la aplicación de lista de tareas. Este componente permite al usuario agregar, actualizar y eliminar tareas, y se comunica con el backend a través de funciones que manejan solicitudes HTTP

import { useEffect, useState } from "react";

//Se importa el componente de Lista
import Lista from "../src/components/Lista";

//Se importan las funciones del manejo del API
import { getAllLista, addLista, updateLista, deleteLista } from "./utils/HandleApi";

function App() {

  //Distintos estados
  const [lista, setLista] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [listaId, setListaId] = useState("")


  //Llama a getAllLista(setLista) para obtener todas las tareas del backend y establecerlas en el estado lista.
  useEffect(() =>{
    getAllLista(setLista)
  }, [])

  // Cambiar el modo de "Añadir" a actualización.
  const updateMode = (_id, text) =>{
    setIsUpdating(true)
    setText(text)
    setListaId(_id)
  }

  //la vista del cliente
  return (
    <div className="App">
      <div className="container">
        <h1>Lista de Tareas</h1>
        <div className="top">
          <input
          type="text"
          placeholder="Añadir Tareas..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <div
          className="add"
          onClick={ isUpdating ?
            () => updateLista(listaId, text, setLista, setText, setIsUpdating)
           :() => addLista(text, setText, setLista)}>
            {isUpdating ? "Actualizar" : "Agregar"}
          </div>

        </div>

        <div className="list">
          {lista.map((item) => <Lista
          key={item._id}
          text={item.text}
          updateMode = {()=> updateMode(item._id, item.text)}
          deleteLista = {()=> deleteLista(item._id, setLista)}/>)}

        </div>

      </div>
    </div>
  );
}

export default App;
