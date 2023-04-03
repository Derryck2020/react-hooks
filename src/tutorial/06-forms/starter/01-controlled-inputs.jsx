import { useState } from 'react';

const ControlledInputs = () => {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   // const handleChange = (e) => {
   //    // console.log(e.target.name);
   //    // console.log(e.target.value);
   //    setName(e.target.value);
   // };
   const handleChangePassword = (e) => {
      setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      //continue with logic
      //console.log(name, password);
   };

   return (
      <form className="form" onSubmit={handleSubmit}>
         <h4>EzyShop</h4>
         <div className="form-row">
            <label htmlFor="name" className="form-label">
               Username
            </label>
            <input
               type="text"
               className="form-input"
               id="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div className="form-row">
            <label htmlFor="password" className="form-label">
               password
            </label>
            <input
               type="password"
               className="form-input"
               id="password"
               value={password}
               onChange={handleChangePassword}
            />
         </div>
         <button type="submit" className="btn btn-block">
            login
         </button>
      </form>
   );
};
export default ControlledInputs;
