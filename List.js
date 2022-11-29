import React from 'react'

function List({persons}) {
    const list=persons.map((person)=>{
        const {id,name,age,image}=person;
        return(
            <div className='Person' key={id}>
         <img src={image} alt="img person"></img>

         <div className='info'>
            <h2>{name}</h2>
            <p>{age}</p>
         </div>
            </div>
        )
    });
  return (
    <div >
        {list}

    </div>
  )
}

export default List