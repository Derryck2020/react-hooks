import { useState } from 'react';

const CleanupFunction = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <div>
         <button className="btn" onClick={() => setToggle(!toggle)}>
            Hit me
         </button>
         {toggle && <RandomCompo />}
      </div>
   );
};

const RandomCompo = () => {
   return <h3>Shout ma NickName!!!</h3>;
};

export default CleanupFunction;
