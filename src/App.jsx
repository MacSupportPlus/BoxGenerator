import {useState} from 'react';
import './App.css';
import BoxCard from './components/BoxCard';
import BoxForm from './components/BoxForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
// adds a box
  const [form, setForm]= useState({
    backgroundColor: "",
  })
// shows changes for form
  const handleForm = e => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value 
    })
  
  }
//shows the different boxes
  const [boxes,setBoxes]= useState([
    {
      backgroundColor: "blue"
    },
    {
      backgroundColor: "red"
    },
    { 
      backgroundColor: "purple"
    }
  ])
// adds box to array of boxes
  const handleAddBox = (e) => {
    e.preventDefault(); 
    setBoxes([...boxes,form]);
    setForm({
      name:""
    })
    




  }


  return (
    <>
    
      <BoxForm 
      inputs={form} 
      handleForm={handleForm}
      handleSubmit={handleAddBox}
      /> 
    
      <div className="d-flex justify-content border p-5">
        {
        boxes.map((box, i) => {
          return <BoxCard 
                  key={i} 
                  backgroundColor= {box.backgroundColor}
                  />
        })
        }
      
    </div>
  </>
  );
}

export default App;
