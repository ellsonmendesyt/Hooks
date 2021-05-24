import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import useForm from './components/useForm';

function App() {

  //#2 usa o hook
  const [values, handleChange]=useForm({email:'',password:''});

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
