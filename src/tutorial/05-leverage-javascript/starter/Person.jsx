import avatar from '../../../assets/react.svg';
import React from 'react';
export function Person({ name, nickName = 'Be Sharp', images }) {
   // const img = images && images[0] && images[0].small && images[0].small.url;
   // const img = images?.[0]?.small?.url || avatar;
   const img = images?.[0]?.small?.url ?? avatar;
   return (
      <div>
         <img src={img} alt={name} style={{ width: '50px' }} />
         <h3>{name}</h3>
         <p>Nickname: {nickName}</p>
      </div>
   );
}
