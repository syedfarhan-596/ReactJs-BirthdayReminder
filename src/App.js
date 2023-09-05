import { persons } from './data';
import { useState } from 'react';
function App() {
  const [person,setPerson] = useState(persons)
  const deleteItem = (id)=> {
    let newPerson = person.filter((item)=> item.id !== id)
    setPerson(newPerson)
  }
  return (
    <div className='container h-75 w-50 p-2'>
      <div className=" justify-content-center border ">
        <h1>BirthDay Reminder</h1>
        {person.map((items)=>{
          const {id,name,alt,age,img} = items
          return(
            <div key={id} className="d-flex justify-content-between btn btn-light m-2 p-2 border-bottom ">
              <div>
                <h4>name:{name}</h4>
                <h6>age:{age}</h6>
                <img alt={alt} width='70' height='70' className="rounded-circle" src={img}></img>
              </div>
              <button className='btn btn-light' onClick={()=>deleteItem(id)}>Remove</button>
            </div>
          )
        })}
      </div>
      <button className='btn btn-lg btn-danger w-100' onClick={()=> setPerson([])}> Clear All</button>
    </div>
  );
}

export default App;
