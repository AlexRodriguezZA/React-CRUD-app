import React from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { useState} from 'react';


const dataDBZ = [
    {name:"goku", id:1, power:150},
    {name:"Vegetta", id:2, power:140},
    {name:"Gohan", id:3, power:100},
    {name:"picolo", id:4, power:125},
    {name:"bills", id:5, power:300},
    {name:"wiss", id:6, power:1000}, 
]

const CrudApp = ()=>{
    const [baseDatos, setBaseDatos] = useState(dataDBZ);
    const [dataToEdit, setdataToEdit] = useState(null);



    const createData = (data)=>{
        data.id = Date.now() //Agregamos un id a cada personaje
        setBaseDatos([...baseDatos, data])
        console.log(data)

    }

    const updateData = (datos)=>{
        const newData = baseDatos.map( dato => dato.id === datos.id ? (datos): (dato))
        setBaseDatos(newData)

    }

    const DeleteData = (id)=>{
        let confirmarEliminacion = window.confirm("¿Desea eliminar el registro?")
        if (confirmarEliminacion) {
            const newdatas = baseDatos.filter( dato => id !== dato.id);
            setBaseDatos(newdatas)   
        }
        
    }
    return(
        <div className="container">
            <h1 className="display-2 text-center mb-8">Crud app</h1>
            <CrudForm   createData={createData} 
                        updateData={updateData} 
                        dataToEdit={dataToEdit} 
                        setdataToEdit={setdataToEdit}/>

            <CrudTable  data={baseDatos}
                        setdataToEdit={setdataToEdit}
                        DeleteData={DeleteData} />
        </div>
    );
}

export default CrudApp; 