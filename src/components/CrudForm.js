import React from "react";
import { useState, useEffect } from 'react';

const initialForm = {
    name: "",
    power: null,
    id: null
}

const CrudForm = ({createData,updateData,dataToEdit,setdataToEdit})=>{

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
      if (dataToEdit) {
        setForm(dataToEdit)
        
      }else{
        setForm(initialForm)
      }

    }, [dataToEdit])
    

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if (!form.name || form.power===null) {
            alert("Cargue todos los datos")
            
        }

        if (form.id === null) {
            createData(form);
            
        }
        else{
            updateData(form);
        }
        handleReset();
    }
    const handleReset = (e)=>{
        setForm(initialForm);
        setdataToEdit(null)
        
    }
    return(
        <div>
            {dataToEdit === null ? ( <h3>Agregar Datos</h3>): (<h3>Editar Datos</h3>)}
           
            <form className="form-group row" onSubmit={handleSubmit}>
                <input className="col form-control" type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
                <input className="col form-control" type="number" name="power" placeholder="Poder" onChange={handleChange} value={form.power}/>
                <input className="btn btn-submit" type="submit" value="Enviar"/>
                <input type="reset"  value="Limpiar" onClick={handleReset}/>
            </form>

        </div>
    );
}

export default CrudForm;