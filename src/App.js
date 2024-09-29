import { useEffect, useState } from "react";
import Lista from "../src/components/Lista";
import { getAllLista, addLista, updateLista, deleteLista } from "./utils/HandleApi";

function App() {

  const [lista, setLista] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [listaId, setListaId] = useState("")

  useEffect(() =>{
    getAllLista(setLista)
  }, [])

  const updateMode = (_id, text) =>{
    setIsUpdating(true)
    setText(text)
    setListaId(_id)
  }

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
