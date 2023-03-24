import { useState } from 'react';

const ToggleChallenge = () => {
   const [showAlert, setShowAlert] = useState(false);

   // const toggleAlert = () => {
   //    if (showAlert) {
   //       setShowAlert(false);
   //       return;
   //    }
   //    setShowAlert(true);
   // };

   return (
      <div>
         <button
            onClick={() => setShowAlert(!showAlert)}
            className="btn"
            style={{ background: 'violet' }}
         >
            Progress
         </button>
         {showAlert && <Alert />}
      </div>
   );
};

const Alert = () => {
   return (
      <div className="alert alert-danger" style={{ background: '#8ff75f' }}>
         IPO Launching progress...
      </div>
   );
};

export default ToggleChallenge;
