//El siguiente código contiene funciones que manejan las operaciones de la lista de tareas utilizando Axios para realizar solicitudes HTTP a un backend. Estas funciones permiten obtener, agregar, actualizar y eliminar tareas en la aplicación.

import axios from 'axios'


//Se define la URL base del backend donde se realizarán las solicitudes. Esta URL es donde la API está desplegada.
const baseUrl = "https://lista-de-tareas-backend-izf2.onrender.com"


//Obtiene todas las tareas
const getAllLista = (setLista) =>{
    axios.get(baseUrl)
    .then(({data}) =>{
        console.log('data --->', data);
        setLista(data)
    })
}

//Permite añadir una nueva tarea
const addLista=(text, setText, setLista) =>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) =>{
        console.log(data);
        setText("")
        getAllLista(setLista)
    })
    .catch((err) => console.log(err))
}

//Permite editar una tarea
const updateLista=(listaId, text, setLista, setText, setIsUpdating) =>{
    axios
    .post(`${baseUrl}/update`, {_id : listaId, text})
    .then((data) =>{
        setText("")
        setIsUpdating(false)
        getAllLista(setLista)
    })
    .catch((err) => console.log(err))
}

//Permite eliminar una tarea
const deleteLista=(_id, setLista) =>{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) =>{
        getAllLista(setLista)
    })
    .catch((err) => console.log(err))
}

export {getAllLista, addLista, updateLista, deleteLista}