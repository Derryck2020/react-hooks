import { useState } from 'react';

const UseStateObject = () => {
   const [person, setPerson] = useState({
      name: 'Derryck',
      age: 31,
      hobby: 'playing video games',
   });

   const displayPerson = () => {
      // setPerson({ name: 'Ben', age: 25, hobby: 'Talking' });
      setPerson({ ...person, name: 'Susan' });
   };
   return (
      <>
         <h4 className="text">{person.name}</h4>
         <h4>{person.age}</h4>
         <h4 className="text">Enjoys : {person.hobby}</h4>
         <button type="button" className="btn" onClick={displayPerson}>
            show
         </button>
      </>
   );
};

export default UseStateObject;
