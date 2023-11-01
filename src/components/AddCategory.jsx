import React, { useState } from 'react'

const AddCategory = ({ setCategory }) => {
    const [value, setValue] = useState('')
    const [mensaje,setMensaje] = useState('Categoria')

    const searchGif = e => {
        e.preventDefault()
        if(value.trim()){
            setCategory(value)
            setValue('')
            setMensaje('Categoria')
        }else{
            setMensaje('Completar categoria!!!')
            setValue('')
        }
    }

    return (
        <div>
            <h4 className='text-center'>Agregar categoria</h4>
            <form className='shadow' action="" onSubmit={searchGif}>
                <input type="text" value={value} placeholder={mensaje} onChange={e => setValue(e.target.value)} />
                <input type="submit" value='Buscar' />
            </form>
        </div>
    )
}

export default AddCategory