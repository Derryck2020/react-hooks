import { data } from '../../../data';
import React from 'react';

const UseStateArray = () => {
   const [people, setPeople] = React.useState(data);

   const removeItem = (id) => {
      // console.log(id);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
   };
   const clearAllItems = () => {
      setPeople([]);
   };

   return (
      <div>
         {people.map((person) => {
            const { id, name } = person;
            // console.log(person);
            return (
               <div key={id}>
                  <h4 className="text">{name}</h4>
                  <button type="button" onClick={() => removeItem(id)}>
                     remove
                  </button>
               </div>
            );
         })}
         <button
            type="button"
            onClick={clearAllItems}
            className="btn"
            style={{ marginTop: '2rem' }}
         >
            clear all
         </button>
      </div>
   );
};

export default UseStateArray;
