import { useState } from 'react';
import './App.css';
import data from './data'
import List from './List';
function App() {
  const [Person,setPersons]=useState(data);
  return (
    <div className="App">
    <section className="card">
      <h1>{Person.length} Birthdays Today</h1>
      <List persons={Person} ></List>
      <button className='clearBtn' onClick={()=>setPersons([])}> Clear All</button>

    </section>
    </div>
  );
}

export default App;
