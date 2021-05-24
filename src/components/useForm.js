import  { useState} from 'react'

// #cria o hook
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues)
return[
    values,          ///lembra os valores anteriores
    e=>setValues({                  
        ...values,                  //mantem os valores que ja tem
        [e.target.name]:e.target.value //o que eu digitar vai ser o nome
}
)]}

export default useForm

/**
 * Contem a logica de como guarar o estado
 * Não tem interface associada 
 * Contem apenas a logica
 * Temos que vincular a interface a esse hook
 * 
 * #### ETAPAS ####### 
 * #1 instanciar o hook 
 * #2 vincular a interface com o hook 
 */