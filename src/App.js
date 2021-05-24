import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import useForm from './components/useForm';
import React, { useState, useEffect } from 'react'

function App() {
  //guarda o estado
  const [values, handleChange]=useForm({email:'',password:''});



 useEffect(()=>{
   console.log('renderizou');
 },[values.password])





// ENTRADAS CONTROLADAS   
// o input mostra o estado
// quando digitamos mudamos o estado

  return (
   <div className="container-fluid d">
     <div className="row">
       <div className="col-md-6 d h">
       
        <input 
        value={values.email}
        type="email" 
        name="email" 
  
        autoComplete='off'
        onChange={ handleChange} /> <br/>
      

        <input 
        type="password" 
        name="password" 
        value={values.password}
        onChange={handleChange}
        autoComplete='off'
        />
       </div>
       <div className="col-md-6 d h">

       </div>
     </div>
   </div>

  );
}

export default App;
