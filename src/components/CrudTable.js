import React from "react";
import CrudTableRow from "./CrudTableRow";

function CrudTable({data,setdataToEdit,DeleteData}) {
    return ( 
        <div>
            <h3>Tabla de datos</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Power</th>
                    </tr>
                </thead>
                <tbody>
                   {data.length === 0 ? (<tr><td colSpan="3">Sin datos</td></tr>):
                   (data.map( (datos) => {
                    return(
                        <CrudTableRow 
                            key={data.id} 
                            datos = {datos}
                            setdataToEdit={setdataToEdit}
                            DeleteData={DeleteData}/>);
                   }))}
                </tbody>

            </table>
        </div>
     );
}

export default CrudTable;