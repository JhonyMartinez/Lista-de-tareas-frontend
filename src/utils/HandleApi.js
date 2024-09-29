import axios from 'axios'

const baseUrl = "https://lista-de-tareas-backend-izf2.onrender.com"

const getAllLista = (setLista) =>{
    axios.get(baseUrl)
    .then(({data}) =>{
        console.log('data --->', data);
        setLista(data)
    })
}

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

const deleteLista=(_id, setLista) =>{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) =>{
        getAllLista(setLista)
    })
    .catch((err) => console.log(err))
}

export {getAllLista, addLista, updateLista, deleteLista}