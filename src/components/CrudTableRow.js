import React from "react";

function CrudTableRow({datos,setdataToEdit,DeleteData}) {
    return ( 
        <tr>
            <td>{datos.name}</td>
            <td>{datos.power}</td>
            <td>
                <button className="btn btn-primary" onClick={()=> setdataToEdit(datos)}>Editar</button>
                <button className="btn btn-danger" onClick={()=> DeleteData(datos.id)}>Eliminar</button>
            </td>
        </tr>
     );
}



export default CrudTableRow;